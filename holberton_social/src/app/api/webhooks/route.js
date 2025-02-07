import { Webhook } from 'svix';
import { headers } from 'next/headers';

export async function POST(req) {
  // 1. Récupérer la clé secrète depuis les variables d'environnement
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;
  if (!WEBHOOK_SECRET) {
    throw new Error('add WEBHOOK_SECRET in .env or .env.local');
  }

  // 2. Récupérer les en-têtes envoyés par Clerk via Svix
  const headerPayload = headers();
  const svix_id = headerPayload.get('svix-id');
  const svix_timestamp = headerPayload.get('svix-timestamp');
  const svix_signature = headerPayload.get('svix-signature');

  // Vérifier que tous les en-têtes nécessaires sont présents
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error: Missing svix headers', { status: 400 });
  }

  // 3. Lire le corps de la requête
  let payload;
  try {
    payload = await req.json();
  } catch (error) {
    console.error('Error reading request body:', error);
    return new Response('Error reading body', { status: 400 });
  }
  
  const body = JSON.stringify(payload);

  // 4. Créer une instance de Svix avec la clé secrète et vérifier la signature
  const wh = new Webhook(WEBHOOK_SECRET);
  let evt;
  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    });
  } catch (err) {
    console.error('Webhook verification error:', err);
    return new Response('Webhook verification error', { status: 400 });
  }

  // 5. Traiter l'événement reçu
  const { id } = evt.data;
  const eventType = evt.type;
  console.log(`Webhook reçu - ID: ${id}, Type: ${eventType}`);
  console.log('Corps du webhook:', body);

  switch (eventType) {
    case 'user.created':
      console.log('A new user has been created');
      
      break;
    case 'user.updated':
      console.log('A user has been updated');
      // Code pour mettre à jour les infos de l'utilisateur
      break;
    case 'user.deleted':
      console.log('A user has been deleted');
      // Code pour supprimer l'utilisateur ou gérer cette logique
      break;
    default:
      console.log('Unhandled event type:', eventType);
  }

  // 6. Répondre à Clerk pour indiquer que le webhook a bien été traité
  return new Response('', { status: 200 });
}

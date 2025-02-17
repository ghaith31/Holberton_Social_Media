# Holberton Social Media

Holberton Social Media is a comprehensive, full-stack social media application designed specifically for students. It enables users to securely share academic resources—such as PDFs, images, and documents—in an engaging and collaborative environment. The project was developed solo in under three weeks using an Agile methodology with three one-week sprints, ensuring rapid delivery and continuous improvement.

## Project Overview

**Objective:**  
Create a user-friendly social media platform for students to publish, share, and interact with academic content while learning to integrate modern web technologies and services.

**Key Features:**
- **User Authentication:** Secure sign-up and login implemented using [Clerk](https://clerk.dev/).
- **Data Management:** Efficient storage of user data and posts with [MongoDB](https://www.mongodb.com/) using Mongoose for object modeling.
- **File Upload:** Seamless integration with [Firebase Storage](https://firebase.google.com/docs/storage) for handling image and document uploads.
- **Webhooks Integration:** Utilization of [Svix](https://www.svix.com/) to manage events (such as `email.created` and `organization.created`), ensuring timely notifications and data synchronization.
- **Social Interactions:** Innovative features that allow each user to access friends’ profiles and follow others, enhancing community engagement.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies & Services](#technologies--services)
- [Future Enhancements](#future-enhancements)
- [License](#license)
- [Contact](#contact)

## Installation

To set up this project locally, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/ghaith31/Holberton_Social_Media.git
   cd holberton-social-media
    npm install
2. **Environment Variables: Create a .env file in the root directory and add the following environment variables::**
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
    MONGODB_URI=your_mongodb_uri
    FIREBASE_CONFIG=your_firebase_config_json
    SVIX_SECRET=your_svix_secret

3. **Run the Development Server::**
    npm run dev



## Usage:
Authentication: Users can sign up and log in using Clerk.
Posts: Authenticated users can create posts containing text, images, or documents.
File Uploads: Users can upload files, which are securely stored using Firebase Storage.
Social Interactions: Users can access friends’ profiles and follow them.
Webhook Processing: The application processes webhook events to synchronize data and manage notifications.

## Technologies & Services

- **Frontend:**
  - [Next.js](https://nextjs.org/) for server-side rendering (SSR) and static site generation (SSG)
  - [Clerk](https://clerk.dev/) for user authentication

- **Backend & Database:**
  - [MongoDB](https://www.mongodb.com/) for data storage
  - [Mongoose](https://mongoosejs.com/) for object modeling

- **File Management:**
  - [Firebase Storage](https://firebase.google.com/docs/storage) for file uploads and retrieval

- **Third-Party Integrations:**
  - [Svix](https://www.svix.com/) for webhook event handling

- **Deployment:**
  - [Vercel](https://vercel.com/) for hosting and deployment

## Future Enhancements

- **User Profiles & Social Interactions:** Expand the system to offer detailed user profiles and advanced features like real-time notifications.
- **UI/UX Improvements:** Continuously refine the user interface to enhance accessibility and engagement.
- **Advanced Analytics:** Integrate analytics tools to monitor user engagement and optimize content recommendations.

## License

This project is licensed under the MIT License.

## Contact

For any questions or inquiries, please contact:

- **Your Name** – gharsallighaith31@gmail.com



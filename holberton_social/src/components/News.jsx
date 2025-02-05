'use client';
import { useState, useEffect } from 'react';

export default function News() {
  const [news, setNews] = useState([]);
  const [articleNum, setArticleNum] = useState(3);

  useEffect(() => {
    //  clé API NewsAPI.org
    fetch('https://newsapi.org/v2/everything?q="web"&apiKey=3e2fee1a380c4379ace50d8c52ab5839')
      .then((res) => res.json())
      .then((data) => {
        // Vérifiez que data.articles existe et mettez-les dans l'état
        setNews(data.articles || []);
      })
      .catch((error) => console.error('Erreur lors de la récupération des news:', error));
  }, []);

  return (
    <div className='text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2'>
      <h4 className='font-bold text-xl px-4'>Recent Trends in Tech</h4>
      {news.slice(0, articleNum).map((article) => (
        <div key={article.url}>
          <a href={article.url} target='_blank' rel="noopener noreferrer">
            <div className='flex items-center justify-between px-4 py-2 space-x-1 hover:bg-gray-200 transition duration-200'>
              <div className='space-y-0.5'>
                <h6 className='text-sm font-bold'>{article.title}</h6>
                <p className='text-xs font-medium text-gray-500'>{article.source.name}</p>
              </div>
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  width={70}
                  className='rounded-xl'
                  alt="Illustration de l'article"
                />
              )}
            </div>
          </a>
        </div>
      ))}
      <button
        onClick={() => setArticleNum(articleNum + 3)}
        className='text-blue-300 pl-4 pb-3 hover:text-blue-400 text-sm'
      >
        Charger plus
      </button>
    </div>
  );
}

import React, {useEffect, useState} from 'react'
import axios from 'axios'

const NewsFeed = () => {
  const [newsFeed, setNewsFeed] = useState([]);

  async function getNewsFeed() {
    const response = await axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=37791e01876c47b29a7750e92b3f8f0d');
    setNewsFeed(response.data.articles);
  }

  function goToNewsArticle(url) {
    window.open(url, '_blank');
  }

  useEffect(() => {
    getNewsFeed();
  }, [])


  return (
    <div className='p-10 container mx-auto bg-gray-800'>
      <h3 className='mt-14 text-center font-bold text-5xl text-white'>News Feed</h3>
      <section className='grid md:grid-cols-2 gap-16 my-10'>
        {
          newsFeed.map((news) => (
            <div key={news.title} className="shadow-md bg-slate-200 flex justify-between p-4 rounded-lg cursor-pointer" onClick={() => goToNewsArticle(news.url)}>
              <div className='mr-10'>
                <h2 className='font-bold text-2xl mb-4'>{news.title}</h2>  
                <p className='leading text-xl'>{news.description}</p>
                <p className='mt-5 font-bold'>Authored By: {news.author}</p>
              </div>
              <div className='self-center w-1/2'>
                <img src={news.urlToImage} alt="Article"/>
              </div>
            </div>
          ))
        }
      </section>
    </div>
  )
}

export default NewsFeed
import React, { useEffect, useState } from 'react';
import Loading from './Loading';

const Cards = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const handleApi = async (reset = false) => {
    setLoading(true);    
    if (reset) {
      setData([]);
      setPage(1);  
      setHasMore(true); 
    }

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${reset ? 1 : page}`);
    const result = await response.json();

    if (result.length === 0) {
      setHasMore(false); 
    } else {
      setData((prev) => [...prev, ...result]); 
    }

    setLoading(false);
  };

  // Handle infinite scroll
  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 100 && !loading && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); 
  }, [loading, hasMore]);

  useEffect(() => {
    if (hasMore) {
      handleApi();
    } else {
      setTimeout(() => {
        handleApi(true); 
       }, 2000);
    }
  }, [page, hasMore]);

  return (
    <div className="container mx-auto px-4 mt-10 md:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {data.map((item, index) => (
          <div
            key={item.id}
            className={`bg-white text-black shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg duration-300 
            ${index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'}`} // Alternating scroll animation
          >
            <div className="py-5 text-center space-y-4 px-1">
              <p className="mt-2 w-full uppercase text- font-semibold ">
                {item.body.substring(0, 117)}...
              </p>
              <h1 className="text-lg text-center bg-black font-semibold text-white font-mono">
                {item.title.slice(0, 25)}...
              </h1>
            </div>
          </div>
        ))}
      </div>

      {loading && <p className="text-center"><Loading/></p>} {/* Loading indicator */}
    </div>
  );
};

export default Cards;

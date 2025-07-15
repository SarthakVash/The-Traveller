
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import "../src/App.css";

const Blogs = () => {
  const location = useLocation();
  const [data, setData] = useState(null);

  const GetDataId = () => {
    // fetch('https://travelblog-backend-0bm3.onrender.com/blogs/all/' + location?.state)
       fetch('https://the-traveller-backend.onrender.com/api/posts/${location?.state}')
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  };

  useEffect(() => {
    GetDataId();
  }, [location?.state]);

  if (!data) return <div className='text-center mt-5'>Loading...</div>;

  return (
    <div className='detail'>
      <h1>{data?.title}</h1>
      <img src={data?.image} alt={data?.title} className='img-fluid' />
      <div>{data?.description}</div>
    </div>
  );
};

export default Blogs;

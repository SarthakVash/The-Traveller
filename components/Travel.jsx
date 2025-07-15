import React, { useEffect, useState } from 'react';
import './Travel.css';
import { useNavigate } from 'react-router-dom';

const Travel = () => {
  const [travelPosts, setTravelPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTravelPosts = async () => {
      try {
        // // const res = await fetch("http://localhost:4000/api/posts/");
        // const res = await fetch("https://the-traveller-backend.onrender.com/");
        const res = await fetch("https://the-traveller-backend.onrender.com/api/posts/");
        const data = await res.json();
        const travelOnly = data.filter(post => post.category === "travel");
        setTravelPosts(travelOnly);
      } catch (err) {
        console.error("Failed to fetch travel posts", err);
      }
    };
    fetchTravelPosts();
  }, []);

  const goToDetail = (id) => {
    navigate(`/post/${id}`);
  };

  return (
    <div className="container-fluid travel">
      <div className="row travel-guide">
        <span className="line1"></span>
        <h1>Travel Guides</h1>
        <span className="line2"></span>
      </div>
      <div className="row">
        <h4>Popular travel blog posts & guides</h4>
      </div>
      <div className="container-fluid boxxxx">
        <div className="row images">
          {travelPosts.length === 0 ? (
            <p>Loading travel guides...</p>
          ) : (
            travelPosts.map((post, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-7 col-10  d-block cardd" onClick={() => goToDetail(post._id)} style={{ cursor: "pointer" }}>
                <img src={post.image} alt={post.title} />
                <h5>{post.title}</h5>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Travel;

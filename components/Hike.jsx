import React, { useEffect, useState } from 'react';
import './Hike.css';
import { useNavigate } from 'react-router-dom';

const Hike = () => {
  const [hikePosts, setHikePosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHikePosts = async () => {
      try {
        // // const res = await fetch("http://localhost:4000/api/posts/");
        // const res = await fetch("https://the-traveller-backend.onrender.com/");
        const res = await fetch("https://the-traveller-backend.onrender.com/api/posts/");
        const data = await res.json();
        const hikeOnly = data.filter(post => post.category === "hike");
        setHikePosts(hikeOnly);
      } catch (err) {
        console.error("Failed to fetch hike posts", err);
      }
    };
    fetchHikePosts();
  }, []);

  const goToDetail = (id) => {
    navigate(`/post/${id}`);
  };

  return (
    <div className="container-fluid hike">
      <div className="row hike-guide">
        <span className="line1"></span>
        <h1>Hikes</h1>
        <span className="line2"></span>
      </div>
      <div className="row">
        <h4>Bucket list hiking guides</h4>
      </div>
      <div className="container-fluid boxxxx">
        <div className="row images">
          {hikePosts.length === 0 ? (
            <p>Loading hikes...</p>
          ) : (
            hikePosts.map((post, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-7 col-10 cardd  d-block" onClick={() => goToDetail(post._id)} style={{ cursor: "pointer" }}>
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

export default Hike;

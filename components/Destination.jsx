import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './Destination.css';
import background from '../img/backkkkk.jpg';
import in1 from '../img/a1.jpg';
import in2 from '../img/a23.jpg';
import in3 from '../img/a3.jpg';
import in4 from '../img/a4.jpeg';
import in5 from '../img/a5.jpeg';
import in6 from '../img/a6.jpg';

const Destination = () => {
  const [allPosts, setAllPosts] = useState([]);

  const InstaData = [
    { img: in1 }, { img: in2 }, { img: in3 },
    { img: in4 }, { img: in5 }, { img: in6 }
  ];

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // // const resTravel = await fetch('http://localhost:4000/api/posts?category=travel');
        // const resTravel = await fetch('https://the-traveller-backend.onrender.com/');
        // // const resHike = await fetch('http://localhost:4000/api/posts?category=hike');
        // const resHike = await fetch('https://the-traveller-backend.onrender.com/');
        const resTravel = await fetch('https://the-traveller-backend.onrender.com/api/posts?category=travel');
        const resHike = await fetch('https://the-traveller-backend.onrender.com/api/posts?category=hike');
        const travelData = await resTravel.json();
        const hikeData = await resHike.json();

        const combined = [...travelData, ...hikeData];
        setAllPosts(combined);
      } catch (err) {
        console.error('Error fetching posts:', err);
      }
    };
    fetchPosts();
  }, []);

  const getShortLocation = (location) => {
    if (!location) return "";
    const parts = location.split(',').map(part => part.trim());
    return parts.slice(-2).join(', ');
  };

  return (
    <div className="container-fluid desti">
      <div className="row guide">
        <span className="line1"></span>
        <h1>Destinations</h1>
        <span className="line2"></span>
      </div>
      <div className="row">
        <h4>Pick a country and start exploring!</h4>
      </div>

      <div className="container-fluid ">
        <div className="images mt-4">
          {allPosts.length === 0 ? (
            <p className="text-center">Loading destinations...</p>
          ) : (
            allPosts.slice(0, 10).map((post, index) => (
              <Link to={`/post/${post._id}`} key={index} className='no-underline'>
                <div className="destination-card col-lg-4 col-md-6 col-sm-7 col-10">
                  <img src={post.image || background} alt={post.title} className="img-fluid rounded" />
                  <strong><p>{post.title}</p></strong>
                  {post.location && (
                    <p><strong>📍</strong> {getShortLocation(post.location)}</p>
                  )}
                </div>
              </Link>
            ))
          )}
        </div>

        <div className='row aero'>
          <button><i className="bi bi-airplane-fill"></i>MORE DESTINATIONS</button>
        </div>
      </div>

      <div className='row touch mt-5' style={{ backgroundImage: `url(${background})` }}>
        <div className='get-touch'>
          <h1>GET IN TOUCH</h1>
          <p>
            Feel free to <span>contact me</span> if you have travel questions, comments, or suggestions! <br />
            I'll try to get back to you!
          </p>
          <i className="bi bi-send"></i>
        </div>
      </div>

      <div className='row insta'>
        <h4><i className="bi bi-instagram"></i>INSTAGRAM</h4>
      </div>
      <div className='row imagess'>
        {InstaData.map((data, index) => (
          <div className='col-lg-2 col-4 insta-img' key={index}>
            <img src={data.img} alt={`Instagram ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className='row letter'>
        <h2>NewsLetter</h2>
        <p>Subscribe to my newsletter for the latest blog posts, tips, & travel guides. Let's stay updated!</p>
        <div className='mail'>
          <input type="text" placeholder='Email....' />
          <button>SUBSCRIBE</button>
        </div>
      </div>
    </div>
  );
};

export default Destination;

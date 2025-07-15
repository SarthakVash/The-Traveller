import React, { useEffect, useState } from 'react';
import './Post.css';
import { useNavigate } from 'react-router-dom';
import fallbackImage from '../img/me.jpg';
import me from '../img/sarthakk.jpg'; 
import i1 from '../img/i1.jpg';
import i2 from '../img/i2.jpg';
import i3 from '../img/i3.jpg';
import i4 from '../img/i4.jpg';
import i5 from '../img/i5.jpg';
import i6 from '../img/i6.jpg';

const Post = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getPosts = async () => {
      try {
        // // const res = await fetch("http://localhost:4000/api/posts/recent");
        // const res = await fetch("https://the-traveller-backend.onrender.com/");
        const res = await fetch("https://the-traveller-backend.onrender.com/api/posts/recent");
        const data = await res.json();
        setPosts(data.slice(0, 10));
      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    };

    getPosts();
  }, []);

  const handleReadMore = (id) => {
    navigate(`/post/${id}`);
  };

  // const handleImageError = (e) => {
  //   e.target.src = fallbackImage;
  // };

  return (
    <div className="container-fluid post">
      <div className="row posts">
       
        <div className="col-lg-7 col-md-12 col-sm-10 col-10 d-block mb-5">
          <h4>RECENT POSTS</h4>
          <div className="color">
            <span className="orange"></span>
            <span className="gray"></span>
          </div>
          <div className="row">
            {posts.length === 0 ? (
              <p className="text-center">Loading posts...</p>
            ) : (
              posts.map((item, index) => (
                <div key={index} className="col-lg-5 col-md-6 col-10 col-sm-10 m-auto mt-3 cardd">
                  <div className="box">
                    <img
                      src={item.image}
                      alt={item.title}
                      onClick={() => handleReadMore(item._id)}
                      // onError={handleImageError}
                      style={{ cursor: "pointer" }}
                    />
                    <div className="box-head">
                      <p>{item.category ? item.category.toUpperCase() : "BLOG"}</p>
                    </div>
                    <div className="box-title">
                      <h5 onClick={() => handleReadMore(item._id)} style={{ cursor: "pointer" }}>
                        {item.title || "Untitled Post"}
                      </h5>
                    </div>

                    {/* {item.location && (
                      <p className="small mb-1"><strong>📍</strong> {item.location}</p>
                    )} */}

                    {/* {(item.distance || item.difficulty) && (
                      <p className="small mb-1">
                        <strong>📏</strong> {item.distance || ''} {item.difficulty ? `| ${item.difficulty}` : ''}
                      </p>
                    )} */}

                    {/* {item.bestTime && (
                      <p className="small mb-1"><strong>🕒</strong> Best Time: {item.bestTime}</p>
                    )} */}

                    <div className="line"><span></span></div>
                    <div className="button">
                      <button onClick={() => handleReadMore(item._id)}>
                        READ MORE <i className="bi bi-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

      
        <div className="col-lg-4 col-md-12 col-sm-10 col-10 mb-5 self">
          <div className="about">
            <h4>ABOUT ME</h4>
            <div className="color">
              <span className="orange"></span>
              <span className="gray"></span>
            </div>
            <div className="about-me">
              <div className="myimg">
                <img src={me} alt="Me" />
              </div>
              <p className='text'>Hey there! I'm <strong>Sarthak Vashishtha</strong> - a passionate traveler and adventure seeker.</p>
              <p>Whether it’s the peaceful mountains or bustling cities, I’m always chasing new stories and unforgettable experiences. Exploring the world isn’t just a hobby — it’s a way of life.</p>
              <p>Join me as I discover hidden gems, local cultures, and breathtaking landscapes. Let’s explore the world together — one destination at a time!</p>
            </div>
          </div>

        
          <div className="social">
            <h4>Social</h4>
            <div className="color">
              <span className="orange"></span>
              <span className="gray"></span>
            </div>
            <div className="social-media">
              <div className="boxx">
                <div className="sm"><i className="bi bi-facebook"></i><h5>FACEBOOK</h5></div>
                <div className="sm"><i className="bi bi-instagram"></i><h5>INSTAGRAM</h5></div>
              </div>
              <div className="boxx">
                <div className="sm"><i className="bi bi-pinterest"></i><h5>PINTEREST</h5></div>
                <div className="sm youtube"><i className="bi bi-youtube"></i><h5>YOUTUBE</h5></div>
              </div>
              <div className="boxx">
                <div className="sm"><i className="bi bi-envelope"></i><h5>EMAIL</h5></div>
              </div>
            </div>
          </div>

       
          <div className="insta">
            <h4>Instagram</h4>
            <div className="color mb-3">
              <span className="orange"></span>
              <span className="gray"></span>
            </div>
            <div className="row">
              <div className="insta-image">
                <img src={i1} alt="Insta 1" />
                <img src={i2} alt="Insta 2" />
              </div>
              <div className="insta-image">
                <img src={i3} alt="Insta 3" />
                <img src={i4} alt="Insta 4" />
              </div>
              <div className="insta-image">
                <img src={i5} alt="Insta 5" />
                <img src={i6} alt="Insta 6" />
              </div>
            </div>
          </div>

        
          <div className="search">
            <h4>SEARCH</h4>
            <div className="color">
              <span className="orange"></span>
              <span className="gray"></span>
            </div>
            <div className="input mt-3">
              <input type="text" placeholder="Type and hit enter...." />
              <i className="bi bi-search"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

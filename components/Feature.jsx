import React from 'react'
import './Feature.css'
import usa from '../img/usa.jpg'
import nbc from '../img/nbc.png'
import time from '../img/time.jpg'
import bbc from '../img/bbc.jpg'
import travel from '../img/Travel_Leisure_n3.jpg'
import blog from '../img/blog.jpg'
import desti from '../img/destination.jpg'
import about from '../img/sarthk.jpg'
import thanks from '../img/IMG_20250121_170233.jpg'
const Feature = () => {
    return (
        <>
            <div className="container-fluid feature">
                <div className="row feature-head">
                    <span className="line1"></span>
                    <h1>Featured</h1>
                    <span className="line2"></span>
                </div>

                <div className="container-fluid mt-4">
                    <div className="news">
                        <img src={usa} alt="" />
                        <img src={nbc} alt="" />
                        <img src={time} alt="" />
                        <img src={bbc} alt="" />
                        <img src={travel} alt="" />
                    </div>
                </div>

                <div className="container-fluid destination">
                    <div className="row">
                        <div className="image col-lg-4 col-md-7 col-sm-10 col-10 mt-3 m-auto d-block">
                            <img src={blog} alt="" />
                            <h5>TRAVEL BLOG</h5>
                        </div>
                        <div className="image col-lg-4 col-md-7 col-sm-10 col-10 mt-3 m-auto d-block">
                            <img src={desti} alt="" />
                            <h5>DESTINATIONS</h5>
                        </div>
                        <div className="image col-lg-4 col-md-7 col-sm-10 col-10 mt-3 m-auto d-block">
                            <img src={about} alt="" />
                            <h5>ABOUT</h5>
                        </div>
                    </div>
                </div>

                <div className="container-fluid thanks">
                    <div className="row">
                        <div className="col-lg-4 col-md-3 col-sm-10 col-12 m-auto d-block">
                            <img src={thanks} alt="" />
                        </div>
                        <div className="col-lg-7 col-md-5 col-sm-10 col-12 m-auto d-block">
                            <h2>Thanks For Looking!</h2>
                            <p>I'm <span className="name"> Sarthak Vashishtha</span>, a passionate traveler from <span> Alwar, Rajasthan</span>, with a deep love for exploring the diverse beauty and rich culture of India. Over the years, I’ve journeyed through some of the country’s most iconic and spiritual destinations — from the majestic <span>Chittorgarh Fort</span> and the serene hills of <span>Mount Abu</span>, to the romantic lakes of <span>Udaipur</span> and the sacred <span>Vaishno Devi</span> shrine nestled in the mountains of <span>Jammu</span>.</p>
                            <p>My travels have also taken me to the breathtaking landscapes of <span>Srinagar</span>, the spiritual energy of <span>Mathura-Vrindavan</span> and <span>Govardhan</span>, and the vibrant capital city of <span>Delhi</span>, each place offering a unique blend of history, culture, and soul.</p>
                            <p>This travel blog is where I share my experiences, stories, and travel tips — all from a personal lens. I believe travel is not just about places, but about the memories we make, the people we meet, and the perspectives we gain along the way.</p>
                            <p>I hope this blog inspires you to explore beyond the obvious, discover hidden gems, and create unforgettable adventures of your own.</p>
                            <button>READ MORE <i className="bi bi-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Feature


import React from 'react';
import Navbar from './components/Navbar';
import Video from './components/Video';
import Feature from './components/Feature';
import Travel from './components/Travel';
import Hike from './components/Hike';
import Post from './components/Post';
import Destination from './components/Destination';
import Footer from './components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Video />
      <Feature />
      <Travel />
      <Hike />
      <Post />
      <Destination/>
      <Footer/>
    </div>
  );
};

export default Home;

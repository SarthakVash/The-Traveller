import React from 'react'
import './Video.css'
import video from '../img/The World Travel Guy - Website Background.mp4'
import curve from '../img/curve.png'

const Video = () => {
  return (
    <>
      <div className="container-fluid edd p-0">
        <div className="video">
          <video src={video} autoPlay muted loop />
        </div>
        <div className="video-text">
          <h1>EXPLORE.DREAM.DISCOVER.</h1>
          <h5>This is a world travel blog featuring beautiful destinations, new experiences, and hidden places around the
            globe. </h5>
          <h5> Please tag along!</h5>
          <div className="button">
            <button>START EXPLORING</button>
          </div>
        </div>
        {/* <div className='curve-img'>
        <img src={curve} alt="" />
        </div> */}
      </div>
      
    </>
  )
}

export default Video
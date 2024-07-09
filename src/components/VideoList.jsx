import React from 'react'
import image1 from '../assets/1.png'
import image2 from '../assets/2.png'
import image3 from '../assets/3.png'
import { Link } from "react-router-dom";



function VideoList() {
  return (
    <div>
       <a href="https://www.freecodecamp.org/certification/fcc4bcf9362-d60b-4302-9406-f1b95fbdebb9/javascript-algorithms-and-data-structures-v8" target='blank'><div className="w-3/12">
      <img  src={image1}></img></div>
       </a>
       <div className="w-3/12"> <img  src={image3}></img></div>
       <a href="https://www.freecodecamp.org/certification/fcc4bcf9362-d60b-4302-9406-f1b95fbdebb9/responsive-web-design" target="blank"><div className="w-3/12"> <img  src={image2}></img></div></a>
    </div>
  )
}

export default VideoList
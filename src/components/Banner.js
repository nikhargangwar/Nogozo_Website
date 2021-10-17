import React from 'react'
import './Banner.css';
import Img from './Image.jpg'
import Img2 from './image2.png'


function Banner() {
    return (
        <div className="banner">
           <div className="display_banner">
           <img src={Img} alt="Logo"  />
            
           </div>
           <div className="display_banner">
           <img src={Img2} alt="Logo"  />
           </div>

           <div className="display_banner">
           <img src={Img} alt="Logo"  />
           </div>    

        </div>
    )
}


export default Banner

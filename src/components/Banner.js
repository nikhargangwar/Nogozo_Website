import React from 'react'
import './Banner.css';
import Img from '../Images/Image.jpg'
import Img2 from '../Images/image2.png'


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

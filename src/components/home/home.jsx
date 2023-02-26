import React, { useState, useEffect } from 'react';
import "./home.css"
import myPic from "../../assets/2.png"
export default function Home (){
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll); // Listen to scroll event
    
        return () => {
          window.removeEventListener('scroll', handleScroll); // Remove listener on unmount
        };
    }, []);

    const handleScroll = () => {
        if (window.pageYOffset > 0) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      };

    return(
        <div className="main-div">
            <div className='home-main-div'>
                <nav className={`navbar ${isFixed ? 'fixed' : ''}`}>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
                <div className='short-details'>
                    <div class="card">
                        {/* <img src={myPic} alt="Image Description" /> */}
                    </div>
                    <div className="text-wrapper">
                        <p className='name'>Huzaifa Habib_</p>
                        <p className='role'>MERN Stack Developer, Software Engineer</p>
                        <div className='bio'>
                            <div className='age'>
                                <p style={{color:"#71717a", fontSize:"18px", fontWeight:"bolder"}}>AGE:</p> <p style={{paddingLeft:"60px", fontWeight:"600"}}>21</p>
                            </div>
                            <div className='phone'>
                                <p style={{color:"#71717a", fontSize:"18px", fontWeight:"bolder"}}>PHONE:</p> <p  style={{paddingLeft:"35px", fontWeight:"600"}}>03322048099</p>
                            </div>
                            <div className='email'>
                                <p style={{color:"#71717a", fontSize:"18px", fontWeight:"bolder"}}>EMAIL:</p> <p  style={{paddingLeft:"42px", fontWeight:"600"}}><a style={{color:"white", textDecoration:"none"}} href="mailto:huzaifahabib098@gmail.com">huzaifahabib098@gmail.com</a></p>
                            </div>
                            <div className='address'>
                                <p style={{color:"#71717a", fontSize:"18px", fontWeight:"bolder"}}>ADDRESS:</p> <p  style={{paddingLeft:"20px", fontWeight:"600"}}>Hno.R41, Al-Muslim Society Scheme-33 Gulzar-e-Hijri, Karachi.</p>
                            </div>
                            

                        </div>
                    </div>

                </div>
                 
            </div>


        </div>
    )
}
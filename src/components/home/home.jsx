import "./home.css"
import React, { useState, useEffect,useRef } from 'react';
import Typewriter from 'typewriter-effect';
import { FaTwitter,FaFacebookF,FaLinkedinIn } from 'react-icons/fa';
import { BsGithub} from 'react-icons/bs';
import { AiOutlineHome,AiOutlineMail} from 'react-icons/ai';
import { BiUser} from 'react-icons/bi';
import { TbServer} from 'react-icons/tb';
import { GiHamburgerMenu} from 'react-icons/gi';
import Nav from 'react-bootstrap/Nav';
import About from "./about/about";
import Offcanvas from 'react-bootstrap/Offcanvas';



export default function Home (){
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const [activeTab, setActiveTab] = useState('home');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    
    const handleClickHome = () => {
        homeRef.current.scrollIntoView({ behavior: 'smooth' });
        setActiveTab("home")
    };
    const handleClickAbout = () => {
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        setActiveTab("about")

    };

    return(
        <div className="main-div">
            <div className='left-nav' >
                <div className='myImg'></div>
                <h2 style={{textAlign:"center"}}>Huzaifa Habib</h2>

                <div className="socialIcons">
                   <a href="https://www.facebook.com/huzaifa.habib.501598" target={"_blank"}><FaFacebookF style={{fontSize:"38px",background:"#2C2F3F", borderRadius:"50%",padding:"10px",marginLeft:"10px"}} title = "Facebook" className="facebook"/></a> 
                   <a href="linkedin.com/in/huzaifa-habib-8b71ba207/" target={"_blank"}><FaLinkedinIn style={{fontSize:"38px",background:"#2C2F3F", borderRadius:"50%",padding:"10px",marginLeft:"10px"}} title = "Linkedin" className="linkedin"/></a> 
                   <a href="https://github.com/Huzaifa-Habib" target={"_blank"}><BsGithub style={{fontSize:"38px",background:"#2C2F3F", borderRadius:"50%",padding:"10px",marginLeft:"10px"}} title = "Github" className="github"/></a> 

                </div>
                <nav className="linking">
                    <ul>
                        <li onClick={handleClickHome} className={activeTab === 'home' ? 'active' : ''}>
                            <AiOutlineHome className="homeIcon"/> Home
                        </li>
                        <li onClick={handleClickAbout} className={activeTab === 'about' ? 'active' : ''} >
                            <BiUser className="userIcon" /> About
                        </li>
                        <li>
                            <TbServer className="servicesIcon"/> Services
                        </li>
                        <li>
                            <AiOutlineMail className="contactIcon"/> Contact
                        </li>
                    </ul>
                </nav>


            </div>
            <GiHamburgerMenu 
                style=
                {{
                    color:"dodgerblue",
                    fontWeight:"bolder",
                    fontSize:"25px",
                    position:"fixed",left:"95%",
                    top:"10px",cursor:"pointer",
                    
                    
                }}
                onClick={handleShow}
                
            />
            <div className="drawer">
                <Offcanvas style = {{background:"#040B14"}} show={show} onHide={handleClose} >
                    <Offcanvas.Body>
                        <div className='myImg'></div>
                        <h2 style={{textAlign:"center", color:"white"}}>Huzaifa Habib</h2>
                        <div className="socialIcons">
                            <a href="https://www.facebook.com/huzaifa.habib.501598" target={"_blank"}><FaFacebookF style={{fontSize:"38px",background:"#2C2F3F", borderRadius:"50%",padding:"10px",marginLeft:"10px"}} title = "Facebook" className="facebook"/></a> 
                            <a href="linkedin.com/in/huzaifa-habib-8b71ba207/" target={"_blank"}><FaLinkedinIn style={{fontSize:"38px",background:"#2C2F3F", borderRadius:"50%",padding:"10px",marginLeft:"10px"}} title = "Linkedin" className="linkedin"/></a> 
                            <a href="https://github.com/Huzaifa-Habib" target={"_blank"}><BsGithub style={{fontSize:"38px",background:"#2C2F3F", borderRadius:"50%",padding:"10px",marginLeft:"10px"}} title = "Github" className="github"/></a> 

                        </div>
                        <nav className="linking">
                            <ul>
                                <li onClick={handleClickHome} className={activeTab === 'home' ? 'active' : ''}>
                                    <AiOutlineHome className="homeIcon"/> Home
                                </li>
                                <li onClick={handleClickAbout} className={activeTab === 'about' ? 'active' : ''} >
                                    <BiUser className="userIcon" /> About
                                </li>
                                <li>
                                    <TbServer className="servicesIcon"/> Services
                                </li>
                                <li>
                                    <AiOutlineMail className="contactIcon"/> Contact
                                </li>
                            </ul>
                        </nav>
                    
                    </Offcanvas.Body>
                </Offcanvas>
            </div>

            <div className='main-content'>
            <div className='home' ref={homeRef}>
                <div className='mySelf'>
                    <h1 style={{fontSize:"60px", marginBottom:"0px", letterSpacing:"0.09em"}}>Huzaifa Habib</h1>
                    <h2 style={{fontSize:"30px", marginTop:"0px",}}>
                        <Typewriter
                            options={{
                                strings: ["I'm MERN Stack Developer", "I'm Freelancer"],
                                autoStart: true,
                                loop: true,
                            
                            }}
                        />
                    </h2>
                </div>
              
            </div>
            <div ref={aboutRef} id = "about">
                <About/>
            </div>

            </div>
           
        </div>
    )
}
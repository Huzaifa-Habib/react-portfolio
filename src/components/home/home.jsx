import "./home.css"
import React, { useState, useEffect,useRef } from 'react';
import Typewriter from 'typewriter-effect';
import { FaTwitter,FaFacebookF,FaLinkedinIn } from 'react-icons/fa';
import { BsGithub} from 'react-icons/bs';
import { AiOutlineHome,AiOutlineMail} from 'react-icons/ai';
import { BiUser} from 'react-icons/bi';
import { TbServer} from 'react-icons/tb';
import { GiHamburgerMenu} from 'react-icons/gi';
import { MdWorkOutline} from 'react-icons/md';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import About from "./about/about";
import Services from "./my-services/services";
import Projects from "./projects/project";



export default function Home (){
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const servicesRef = useRef(null);
    const projectsRef = useRef(null);


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

    const handleClickServices = () => {
        servicesRef.current.scrollIntoView({ behavior: 'smooth' });
        setActiveTab("services")
    };
    const handleClickProjects = () => {
        projectsRef.current.scrollIntoView({ behavior: 'smooth' });
        setActiveTab("projects")
    };

    const handleScroll = () => {
        const homePos = homeRef.current.offsetTop;
        const aboutPos = aboutRef.current.offsetTop;
        const servicesPos = servicesRef.current.offsetTop;
        const projectsPos = projectsRef.current.offsetTop;
      
        const scrollPos = window.scrollY;
      
        if (scrollPos >= homePos && scrollPos < aboutPos) {
          setActiveTab('home');
        } else if (scrollPos >= aboutPos && scrollPos < servicesPos) {
          setActiveTab('about');
        } else if (scrollPos >= servicesPos && scrollPos < projectsPos) {
          setActiveTab('services');
        } else if (scrollPos >= projectsPos) {
          setActiveTab('projects');
        } else {
          setActiveTab('');
        }
      };
      
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
      
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);



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
                        <li onClick={handleClickServices} className={activeTab === 'services' ? 'active' : ''} >
                            <TbServer className="servicesIcon"/> Services
                        </li>
                        <li onClick={handleClickProjects} className={activeTab === 'projects' ? 'active' : ''} >
                            <MdWorkOutline className="projectIcon"/> Work
                        </li> 
                    </ul>
                </nav>


            </div>
            <div className="canvasIcon" style={{backgroundColor:"dodgerblue", borderRadius:"50%",position:"fixed",padding:"8px",top:"5px",marginRight:"15px", zIndex:"999",cursor:"pointer",right:"0px"}} onClick={handleShow} >
                <GiHamburgerMenu 
                    style=
                    {{
                        color:"white",
                        fontWeight:"bolder",
                        fontSize:"25px",
                        top:"10px"
                    }}
                    
                    
                />
            </div>
      
            <div className="drawer">
                <Offcanvas style = {{background:"#040B14"}} show={show} onHide={handleClose}>
                <Offcanvas.Header style={{background:"white", color:"white"}} closeButton/>

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
                                <li onClick={handleClickServices} className={activeTab === 'services' ? 'active' : ''} >
                                    <TbServer className="servicesIcon"/> Services
                                </li>
                                <li onClick={handleClickProjects} className={activeTab === 'projects' ? 'active' : ''} >
                                    <MdWorkOutline className="projectIcon"/> Work
                                </li>
                              
                            </ul>
                        </nav>
                    
                    </Offcanvas.Body>
                </Offcanvas>
            </div>

            <div className='main-content'>
            <div className='home' ref={homeRef}>
                <div className='mySelf'>
                    <h1 style={{fontSize:"60px", marginBottom:"0px", letterSpacing:"0.09em"}}  className = "nameHead">Huzaifa Habib</h1>
                    <h2 style={{fontSize:"30px", marginTop:"0px",}} className = "typeWriter">
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

            <div ref={servicesRef} id = "services">
                <Services/>
            </div>

            <div ref={projectsRef} id = "projects">
                <Projects/>
            </div>

  

            </div>
           
        </div>
    )
}
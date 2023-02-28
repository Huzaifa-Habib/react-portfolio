import "./about.css"
import myPic from "../../.././assets/2.png"
import { IoIosArrowForward} from 'react-icons/io';
import Skills from "../skills/skills";



export default function About(){
    return(
        <div className="about-main-div">
            <div className="about-content-div">
                <h2 style={{color:"#0c4a6e"}}>About</h2>
                <p style={{border:"1px solid dodgerblue", width:"5%"}}></p>
                <div className="bio">
                    <p style={{paddingRight:"10px"}}>
                        My name is Huzaifa Habib. I'm MERN Stack Developer
                        from Karachi, Pakistan. I create amazing websites 
                        that are responsive on all devices. My expertise
                        are to create application using tools like <strong style={{color:"dodgerblue"}}>React</strong> for
                        Front-end and <strong  style={{color:"dodgerblue"}}>Mongoose</strong>  and <strong  style={{color:"dodgerblue"}}>Express.js</strong> for
                        Back-end handling. To know the details about my work you can vist
                        my Github account by following the link which is pin in menu. 
                    </p>
                </div>

                <div className="myInfo">
                    <img src={myPic} alt="My Image" height="250px" width={"250px"} />
                    <div className="textWrapper">
                        <h2 style={{color:"#0c4a6e"}}>MERN Stack Developer</h2>
                        <div style={{ display: 'flex', flexDirection: 'row' ,justifyContent:"space-between" }} className = "myDetails">
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <div><IoIosArrowForward style={{color:"dodgerblue", fontSize:"20px"}}/><strong>Birthday:</strong> 24 December 2002</div>
                                <div style={{paddingTop:"10px" }}><IoIosArrowForward style={{color:"dodgerblue", fontSize:"20px"}}/> <strong>Phone:</strong> 03322048099 </div>
                                <div style={{ paddingTop:"10px"  }}><IoIosArrowForward style={{color:"dodgerblue", fontSize:"20px"}}/> <strong>City:</strong> Karachi, Pakistan </div>

                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', marginLeft:"20px" }} className = "myDetailsSecondDiv">
                                <div ><IoIosArrowForward style={{color:"dodgerblue", fontSize:"20px"}}/><strong>Age:</strong> 21</div>
                                <div style={{ paddingTop:"10px"  }}><IoIosArrowForward style={{color:"dodgerblue", fontSize:"20px"}}/><strong>Qualification:</strong> Matric</div>
                                <div style={{paddingTop:"10px"   }}><IoIosArrowForward style={{color:"dodgerblue", fontSize:"20px"}}/><strong>Email:</strong> huzaifahabib098@gmail.com</div>


                            </div>
                        </div>
                    </div>

                </div>

                <div className="skill-compo">
                    <Skills/>
                </div>

                
            </div>

        </div>
    )
}
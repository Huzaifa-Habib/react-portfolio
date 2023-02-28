import "./skills.css"
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function Skills(){
    return(
        <div className="skills-main-div">
            <div className="skills-content-div">
                <div className="skill-div" style={{ display: 'flex', flexDirection: 'row',justifyContent:"space-between" }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div className="skillName" style={{width:"450px" }}>Html <span style={{float:"right"}} className = "percentage">100%</span></div>
                        <p><ProgressBar animated now={100} /></p>

                        <div className="skillName"  style={{width:"450px" }}>CSS <span style={{float:"right"}} className = "percentage">90%</span></div>
                        <p><ProgressBar animated now={90} /></p>

                        <div className="skillName"  style={{width:"450px" }}>JavaScript <span style={{float:"right"}} className = "percentage">80%</span></div>
                        <p><ProgressBar animated now={80} /></p>
                    </div>
                        
                    <div className="skillName"  style={{ display: 'flex', flexDirection: 'column', marginRight:"20px" }}>

                    <div className="skillName"   style={{width:"450px" }}>Express.js <span style={{float:"right"}} className = "percentage">60%</span></div>
                    <p><ProgressBar animated now={60} /></p>  

                    <div className="skillName"  style={{width:"450px" }}>React <span style={{float:"right"}} className = "percentage">70%</span></div>
                    <p><ProgressBar animated now={70} /></p>  

                    <div className="skillName"  style={{width:"450px" }}>Mongoose <span style={{float:"right"}} className = "percentage">80%</span></div>
                    <p><ProgressBar animated now={80} /></p>                   
                    </div>
                </div>
                
            </div>

        </div>
    )
}

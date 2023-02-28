import "./services.css"
import { Container, Row, Col, Card } from 'react-bootstrap';
import { BsBriefcase,BsCardChecklist} from 'react-icons/bs';


export default function Services(){
    return(
        <div className="services-main-div" >
            <div className="services-content-div">
                <h1 className="services-head">Services</h1>
                <p style={{fontSize:"1.1em",textAlign:"center"}}>My services through out the year</p>
                <p style={{borderBottom:"5px solid dodgerblue", width:"8%" ,marginLeft:"auto", marginRight:"auto"}}></p>
                <Container fluid>
                    <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3" style={{marginTop:"50px"}}>
                        <Col className="mb-4">
                            <Card className = "card">
                                <div className="card-img-div">
                                    <BsBriefcase style={{fontSize:"40px"}} className= "web-icon"/>
                                </div>
                                <Card.Body>
                                    <Card.Title style={{fontWeight:"bold", textTransform:"uppercase", paddingTop:"20px"}}>Web design</Card.Title>
                                    <Card.Text className="cardTxt">I create amazing websites design using <strong>React</strong> and developing Figma templates into live aplication. 
                                    But currently I don't have rich experience in web development as I am more focus on the functionality side of application </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="mb-4">
                            <Card>
                                <div className="card-img-div">
                                    <BsCardChecklist style={{fontSize:"40px"}} className= "webDev-icon"/>
                                </div>
                                <Card.Body>
                                <Card.Title style={{fontWeight:"bold", textTransform:"uppercase", paddingTop:"20px"}}>Web development</Card.Title>
                                    <Card.Text className="cardTxt">I have been in web development field since 1.5 years but I didn't start my professional carrier yet. Through-out my journey I have create many application
                                         including <strong>MERN Stack </strong> applications.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="mb-4">
                            <Card>
                                <div className="card-img-div">
                                    <BsCardChecklist style={{fontSize:"40px"}} className= "webDev-icon"/>
                                </div>   
                                <Card.Body>
                                <Card.Title style={{fontWeight:"bold", textTransform:"uppercase", paddingTop:"20px"}}>RESPONSIVE DESIGN</Card.Title>
                                    <Card.Text className="cardTxt">When you talk about creating websites and application then it
                                               means that application and website should be responsive on all
                                               devices. Now I have created many application and few of them are responsive 
                                               on all devices 
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>


        </div>
    )

}

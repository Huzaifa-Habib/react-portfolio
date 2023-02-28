import "./project.css"
import { Container, Row, Col, Card,Carousel,Button } from 'react-bootstrap';
import onlineStore from "../../.././assets/store.PNG"
import twitter from "../../.././assets/twitter.png"
import chat from "../../.././assets/chat.png"
import ListGroup from 'react-bootstrap/ListGroup';




export default function Projects(){
    return(
        <div className="projects-main-div">
            <div className="projects-content-div">
                <h1 className="project-head"> Portfolio </h1>
                <p style={{fontSize:"1em",textAlign:"center"}}>Some of my <strong>MERN Stack</strong> applications.</p>
                <p style={{borderBottom:"5px solid dodgerblue", width:"8%" ,marginLeft:"auto", marginRight:"auto"}}></p>

                <Container fluid>
                    <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3" style={{marginTop:"50px"}}>
                        <Col className="mb-4">
                            <Card className = "project-card">
                                <img src={onlineStore} height = "300px"/>
                                <Card.Body>
                                    <Card.Title style={{fontWeight:"bold", textTransform:"uppercase", paddingTop:"20px"}}>Online Store</Card.Title>
                                    <Button href="https://github.com/Huzaifa-Habib/Online-discount-store" target="_blank">Details</Button>

                                </Card.Body>

                            </Card>
                        </Col>
                        <Col className="mb-4">
                            <Card className = "project-card">
                                 <img src={twitter} height = "300px" />
                                <Card.Body>
                                    <Card.Title style={{fontWeight:"bold", textTransform:"uppercase", paddingTop:"20px"}}>Social App</Card.Title>
                                    <Button href="https://github.com/Huzaifa-Habib/Twitter-copy" target="_blank">Details</Button>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="mb-4">
                            <Card className = "project-card"> 
                                <img src={chat} height = "300px" style={{margin:"0px", padding:"0px"}}/>
                                
                                <ListGroup className="list-group-flush"></ListGroup>
                                <Card.Body>
                                    <Card.Title style={{fontWeight:"bold", textTransform:"uppercase", paddingTop:"20px"}}>Chat Application</Card.Title>   
                                    <Button href="https://github.com/Huzaifa-Habib/Chat-app-with-socket.io" target="_blank">Details</Button>
              
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

        </div>
    )
}

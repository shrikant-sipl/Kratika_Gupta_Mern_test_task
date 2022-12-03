import React from "react";
import { useSelector } from "react-redux";
import { Nav, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Sidebar = () => {

    const project = useSelector(state => state.common)
    const selectedProject = project.selectedProject
    
    return (
        <div className="sidebar">
            <Card
                bg={'primary'}
                text={'white'}
            >
                <Card.Body>
                    <p>Project: {selectedProject.name}</p>
                    <p>
                        Address:
                        <span className="hr-line"></span>
                        {selectedProject.address ? selectedProject.address : 'N/A'}
                    </p>
                    <p className="sidebar-info contacts">
                        Contacts:
                        <span className="hr-line"></span>
                        {selectedProject.phone ? selectedProject.phone : 'N/A'}<br />
                    </p>

                    <Nav defaultActiveKey="/" className="sidebar-navigation flex-column">
                        {/* <Nav.Link as={Link} to="/">Dashboard</Nav.Link> */}
                        <Nav.Link as={Link} to="/tsa">
                            <img src={require('../../../assets/images/icons/file-icon.png').default} alt="file-icon" />
                            <span>TSA's</span>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/vehicle-inspections">
                            <img src={require('../../../assets/images/icons/vehicle-inspections-icon.png').default} alt="vehicle-inspections-icon" />
                            <span>Vehicle Inspections</span>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/observations">
                            <img src={require('../../../assets/images/icons/glasses-solid-icon.png').default} alt="glasses-solid-icon" />
                            <span>Observations</span>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/policy-and-procedures">
                            <img src={require('../../../assets/images/icons/file-icon.png').default} alt="file-icon" />
                            <span>Policy And Procedures</span>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/safety-shares">
                            <img src={require('../../../assets/images/icons/safety-shares-icon.png').default} alt="safety-shares-icon" />
                            <span>Safety Shares</span>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/posters">
                            <img src={require('../../../assets/images/icons/posters-icon.png').default} alt="posters-icon" />
                            <span>Posters</span>
                        </Nav.Link>
                        {/* <Nav.Link as={Link} to="/projects">Projects</Nav.Link> */}
                    </Nav>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Sidebar;
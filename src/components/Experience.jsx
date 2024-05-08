import { Container, Row, Col } from 'react-bootstrap';

const Experience = () => {
    return (
        <section className="experience" id="experience">
            <Container>
                <h2 className='exp'>Experience</h2>
                <Row className="mb-5">
                    <Col xs={6}>
                        <div className="experience-entry">
                            <div className="experience-icon"></div>
                            <div className="experience-line"></div>
                            <div className="ml-4">
                                <h4>MINDSIGHT MENTORS, Everett, Washington</h4>
                                <p>Non-Profit organization providing services to underrepresented communities.</p>
                                <p className='experience-period'>Software Engineer III <br /> <br />
                                    <span>July 2022 - Present</span>
                                </p>
                                <ul>
                                    <li>Take the helm of the Girls Who Code program and mentor college students to encourage diversity and education in the tech sector.</li>
                                    <li>Architect, design, and maintain eCommerce and home care websites with ReactJs and Spring Boot, ensuring scalability, performance, and user-friendliness.</li>
                                    <li>Manage projects from start to finish to oversee the entire software development lifecycle and guarantee the timely, high-quality delivery of software solutions.</li>
                                    <li>Collaborate with cross-functional teams composed of designers, product managers, and stakeholders to determine the requirements, define the project's scope, and recommend technology solutions that advance organizational objectives.</li>
                                    <li>Use GitHub for version control, Docker for containerization, and Atlassian Jira for project management to speed up development.</li>
                                    <li>Use best practices for software development, such as continuous integration/continuous deployment (CI/CD), test-driven development (TDD), and agile techniques.</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6}>
                        <div className="experience-entry">
                            <div className="experience-icon"></div>
                            <div className="experience-line"></div>
                            <div>
                                <h4>PNC Bank [Virtusa], Pittsburg, Pennsylvania</h4>
                                <p>Financial institution service</p>
                                <p className='experience-period'>Backend Software Developer II <br /> <br />
                                    <span>July 2022 - August 2023</span>
                                </p>
                                <ul>
                                    <li>Contributed to the delivery of innovative financial products and services to customers while maintaining the highest standards of security and reliability.</li>
                                    <li>Make use of your knowledge of both legacy Java EE and contemporary Spring Boot technologies, as well as your familiarity with Spring Integration, to enable smooth integration and interoperability throughout the banking ecosystem.</li>
                                    <li>Utilize JSON and RESTful APIs to increase the software landscape's maintainability and agility.</li>
                                    <li>Worked with build pipelines, DevOps principles, and version control systems (VCS) to streamline development and guarantee continuous integration and deployment (CI/CD) pipelines.</li>
                                    <li>Worked with DevOps, VCS and build systems.</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col xs={6}>
                        <div className="experience-entry">
                            <div className="experience-icon"></div>
                            <div className="experience-line"></div>
                            <div className="ml-4">
                                <h4>WORLD FOOD PROGRAMME, Banjul, The Gambia</h4>
                                <p>World's largest humanitarian organization</p>
                                <p className='experience-period'>IT / Software Developer <br /> <br />
                                    <span>August 2020 - August 2021</span>
                                </p>
                                <ul>
                                    <li>Transferred document routing process between departments.</li>
                                    <li>Designed and maintained scalable database.</li>
                                    <li>Established secure login web interface.</li>
                                    <li>Implemented secure modular code by testing and evaluating document arching and routing to develop modern web applications.</li>
                                    <li>Prepared SLAs to define project implementation, formulation, maintenance, and upgrades.</li>
                                    <li>Developed Standard Operating Procedures for software.</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6}>
                        <div className="experience-entry">
                            <div className="experience-icon"></div>
                            <div className="experience-line"></div>
                            <div>
                                <h4>CAYOR ENTERPRISES, Banjul, The Gambia</h4>
                                <p>Technology company providing business solutions to companies</p>
                                <p className='experience-period'>Application Developer <br /> <br />
                                    <span>July 2018 - Aug 2020</span>
                                </p>
                                <ul>
                                    <li>Managed team throughout development processes.</li>
                                    <li>Performed analysis to effectively deploy applications to production.</li>
                                    <li>Enhanced corporate systems by resolving technical issues.</li>
                                    <li>Ensure application compatibility by implementing RESTful Web Services.</li>
                                    <li>Trained end users on technical specifications to ensure customer satisfaction.</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>

                
                <Row className="mb-4">
                    <Col xs={6}>
                        <div className="experience-entry">
                            <div className="experience-icon"></div>
                            <div className="experience-line"></div>
                            <div className="ml-4">
                                <h4>QUALITY TECHNOLOGY, Ziguinchor, Senegal</h4>
                                <p>Consulting and technological innovation company</p>
                                <p className='experience-period'>Application Developer <br /> <br />
                                    <span>February 2017 - April 2018</span>
                                </p>
                                <ul>
                                    <li>Designed and developed websites and web applications.</li>
                                    <li>Managed all aspects of logistics and information systems.</li>
                                    <li>Ensure application compatibility by implementing RESTful Web Services.</li>
                                    <li>Trained end users on technical specifications to ensure customer satisfaction.</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Experience;

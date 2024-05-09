import { Container, Row, Col } from 'react-bootstrap';

const Education = () => {
    return (
        <section className="education" id="education">
            <Container>
                <div className='education-bx'>
                    <h2 className='edu'>Education</h2>
                    <Row className="mb-5">
                        <Col xs={12}>
                            <div className="education-entry">
                                <div className="education-icon"></div>
                                <div className="education-line"></div>
                                <div className="p-2">
                                    <h5>Master of Science in Computer Science</h5>
                                    <p>Maharishi International University, Fairfield, Iowa</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12}>
                            <div className="education-entry">
                                <div className="education-icon"></div>
                                <div className="education-line"></div>
                                <div className="p-2">
                                    <h5>Bachelor of Science in Computer Science – Class of 2019 <strong>[Summa Cum Laude]</strong></h5>
                                    <p>University of The Gambia, Banjul, The Gambia</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
}

export default Education;
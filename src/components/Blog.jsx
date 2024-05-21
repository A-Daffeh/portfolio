import { useState } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import blog1 from '../assets/images/article.png';
import { MdDoubleArrow } from "react-icons/md";

function Blog() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <section className="blog" id="blogs">
            <Container>
                <h2 className='blg'>Blog</h2>
                <Row className="mb-5">
                    <Col xs={12}>
                        <div className="experience-entry">
                            <div className="ml-4">
                                <h3 className='mb-5'>Enhancing Reliability in Serverless Computing: Mastering AWS Lambda Dead Letter Queues</h3>
                                
                                <img src={blog1} alt="Blog Information" />

                                <h5>Overview of AWS Lambda and Dead Letter Queues</h5>
                                <p>
                                    In the realm of serverless computing, AWS Lambda stands out for its ability to scale 
                                    applications dynamically without server management. 
                                    Despite its benefits, handling failures remains a critical challenge for developers. 
                                    This is where Dead Letter Queues (DLQs) prove invaluable, 
                                    providing a robust mechanism to manage and resolve failures efficiently.
                                </p>

                                <button onClick={handleShow}>
                                    <span>read more <MdDoubleArrow className="me-2" /></span>
                                </button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        <Modal show={show} onHide={handleClose} id="blog-modal" className="custom-modal-size">
            <Modal.Header closeButton>
                <Modal.Title>Enhancing Reliability in Serverless Computing: Mastering AWS Lambda Dead Letter Queues</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={blog1} alt="Blog Information" /> <br />
                <strong>Overview of AWS Lambda and Dead Letter Queues</strong> <hr/>
                In the realm of serverless computing, AWS Lambda stands out for its ability to scale 
                applications dynamically without server management. 
                Despite its benefits, handling failures remains a critical challenge for developers. 
                This is where Dead Letter Queues (DLQs) prove invaluable, 
                providing a robust mechanism to manage and resolve failures efficiently.
                <br /> <br />
                <strong>Understanding Failures in AWS Lambda</strong> <hr />

                <strong>Failures in AWS Lambda can arise from various sources:</strong><br />

                * Function Errors: Issues like runtime errors, unhandled exceptions, or resource exhaustion within the Lambda function.
                <br />
                * Service Errors: Transient issues or outages from AWS services such as S3, DynamoDB, or SNS.
                <br />
                * Timeouts: Execution that exceeds the time limit, typically 15 minutes.
                <br />
                * Resource Limits: Overcoming concurrency or resource thresholds set by Lambda.
                <br /> <br />

                <strong>Benefits of Implementing a Lambda DLQ</strong> <hr />

                <strong>Utilizing a DLQ in AWS Lambda brings several advantages:</strong> <br />

                * Error Isolation: Makes it simpler to pinpoint and resolve errors by isolating problematic invocations.
                <br />
                * Automated Retries: Redrive policies on DLQs allow for automatic reprocessing of failed events, minimizing manual oversight.
                <br />
                * Error Logging: Provides a log of failed events, helping detect recurring issues.
                <br />
                * Data Loss Prevention: Ensures critical events are not discarded, safeguarding against data loss.
                <br /> <br />

                <strong>Implementing a Lambda DLQ</strong> <hr />

                <strong>To set up a DLQ for AWS Lambda, follow these steps:</strong> <br />

                * Create an SQS Queue: Establish an Amazon SQS queue to serve as your DLQ. Configure its redrive policy to manage the reattempt limit and designate a source queue for failed events.
                <br />
                * Configure Lambda Function: Link the DLQ as the failure destination in your Lambda function's settings.
                <br />
                * Monitor with CloudWatch Alarms: Set alarms in CloudWatch to alert when failures reach a specific threshold, aiding in proactive issue resolution.
                <br /> <br />
                <strong>Conclusion</strong> <hr />
                Dead Letter Queues are crucial in serverless environments, enhancing the robustness and reliability of applications. 
                By implementing DLQs, you ensure comprehensive failure management, reducing downtime, and improving service quality.
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default Blog;

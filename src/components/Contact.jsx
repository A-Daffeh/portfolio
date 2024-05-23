import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import axios from 'axios';

const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});
    const [errors, setErrors] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        });
        // Optionally clear errors when the user starts correcting them
        if (!!errors[category]) {
            setErrors({
                ...errors,
                [category]: null
            });
        }
    }

    const validateForm = () => {
        let errors = {};
        if (!formDetails.firstName.trim()) errors.firstName = 'First name is required';
        if (!formDetails.lastName.trim()) errors.lastName = 'Last name is required';
        if (!formDetails.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formDetails.email)) {
            errors.email = 'Email is invalid';
        }
        if (!formDetails.phone.trim()) {
            errors.phone = 'Phone number is required';
        } else if (!/^\d{10}$/.test(formDetails.phone)) {
            errors.phone = 'Phone number is invalid, must be 10 digits';
        }
        if (!formDetails.message.trim()) {
            errors.message = 'Message is required';
        } else if (formDetails.message.trim().length < 10) {
            errors.message = 'Message must be at least 10 characters long';
        }
        return errors;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }
        setButtonText("Sending...");
        try {
              let response = await axios.post('https://n8zahdei44.execute-api.us-east-1.amazonaws.com/prod/contact', formDetails, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            let result = response.data;
            setFormDetails(formInitialDetails);
            setStatus({ success: true, message: 'Message sent successfully'});
            setButtonText("Send");
        } catch (error) {
            setStatus({ success: false, message: 'Something went wrong, please try again later.'});
            setButtonText("Send");
        }
    };

    return (
        <section className="contact" id="connect">
          <Container>
            <Row className="align-items-center">
              <Col size={12} md={8}>
                <TrackVisibility>
                  {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <h2>Get In Touch</h2>
                    <form onSubmit={handleSubmit}>
                      <Row>
                        <Col size={12} sm={6} className="px-1">
                          <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                          {errors.firstName && <p className="text-danger">{errors.firstName}</p>}
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                          {errors.lastName && <p className="text-danger">{errors.lastName}</p>}
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                          {errors.email && <p className="text-danger">{errors.email}</p>}
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                          {errors.phone && <p className="text-danger">{errors.phone}</p>}
                        </Col>
                        <Col size={12} className="px-1">
                          <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                          {errors.message && <p className="text-danger">{errors.message}</p>}
                          <button type="submit"><span>{buttonText}</span></button>
                        </Col>
                        {
                          status.message &&
                          <Col>
                            <p className={status.success === false ? "text-danger" : "text-success"}>{status.message}</p>
                          </Col>
                        }
                      </Row>
                    </form>
                  </div>}
                </TrackVisibility>
              </Col>
            </Row>
          </Container>
        </section>
    )
}

export default Contact;

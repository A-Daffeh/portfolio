import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={12}>
            <div className="social-icon">
              <a href="https://linkedin.com/in/adama-daffeh" target="_blank"><FaLinkedin /></a>
              <a href="https://github.com/A-Daffeh" target="_blank"><FaGithub /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;
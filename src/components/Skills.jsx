import meter1 from "../assets/images/meter1.svg";
import meter2 from "../assets/images/meter2.svg";
import meter3 from "../assets/images/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/images/color-sharp.png"

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p> 
                            <span><strong className="skillset">Languages:</strong> Java, JavaScript</span>
                            {" "}<span><strong className="skillset">Web:</strong> HTML5, CSS3, Bootstrap, ReactJs, Redux</span>
                            {" "}<span><strong className="skillset">Web Services:</strong> REST, EAD </span>
                            {" "}<span><strong className="skillset">SDLC:</strong> Agile/Scrum, Extreme Programming</span>
                            {" "}<span><strong className="skillset">Frameworks:</strong> Spring Boot, React, Hibernate, Spock, JUnit, Mockito</span>
                            {" "}<span><strong className="skillset">Security:</strong> Spring Security, JWT, Role-Based Access Control</span>
                            {" "}<span><strong className="skillset">Messaging System:</strong> Apache Kafka, SQS, SNS</span>
                            {" "}<span><strong className="skillset">Databases:</strong> MySQL, MongoDB, PostgreSQL, DynamoDB</span>
                            {" "}<span><strong className="skillset">Design Patterns:</strong> API Gateway, CQRS, MVC, Facade, Backend for Frontend</span>
                            {" "}<span><strong className="skillset">Tools:</strong> Maven, Gradle, Docker, CI/CD, SonarQube, IntelliJ, Eclipse, GitHub, Postman, Jira</span>
                            {" "}<span><strong className="skillset">Platforms:</strong> Windows, Linux/Unix, Azure, Amazon Web Services(AWS)</span>
                        </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Software Development Life Cycle</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Microservices</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Unit Testing</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Object Oriented Programming</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Data Structures and Collections</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Requirement Analysis</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}

export default Skills;
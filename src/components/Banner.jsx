import { useState, useEffect } from "react";
import { Container  } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Backend Developer", "Software Engineer", "Application Developer" ];
    const period = 2000;
  
    useEffect(() => {
      let ticker = setInterval(() => {
        tick();
      }, delta);
  
      return () => clearInterval(ticker);
    }, [text, delta]);

    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
  
      setText(updatedText);
  
      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }
  
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
      } else {
        setIndex(prevIndex => prevIndex + 1);
      }
    };
  
    return (
      <section className="banner" id="home">
        <Container>
            <TrackVisibility>
            {({ isVisible }) =>
                <div className={isVisible ? "animate_animated animate_fadeIn banner-container" : "banner-container"}>
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>{"Hi! I'm Adama "} 
                        <span className="txt-rotate" data-period="1000" data-rotate='[ "Backend Developer", "Web Developer", "Web Designer" ]'>
                            <span className="wrap">{text}</span>
                        </span>
                    </h1>
                    <p>
                        Talented Java Developer with 5 years of hands-on experience increasing efficiency and productivity by developing comprehensive applications.
                        Effective team leader who enhances development processes by identifying and resolving technical issues.
                        Skilled in using technologies such as Spring Boot, React, Java, JavaScript, RESTful, MongoDB, PostgreSQL, and MySQL.
                    </p>
                </div>
            }
            </TrackVisibility>
        </Container>
      </section>
    );
}

export default Banner;
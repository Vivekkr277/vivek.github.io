import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Vivek Kumar Pandit </span>
            from <span className="purple"> Bihar, India.</span>
            <br />
            Software Developer who loves to transform ideas into reality using
            code.
            <br /><br />
            {/* Motivated designer and developer  creating custom
            websites with ReactJs, JavaScript, HTML5, CSS3, JQuery, Bootstrap. Shopify app using
            ReactJs, Javascript, laravel and Mobile App using React-native. */}
            As a dedicated Full Stack Developer, I possess extensive expertise in both front-end and 
            back-end development, with a proficient understanding of React Native, ReactJS, MySQL, 
            and Laravel among other technologies. I thrive on creating applications that prioritize 
            user experience and efficiency, demonstrated by my successful projects such as SpiceHouse 
            Restaurant App, FilmFlix, and CRUD operations with Laravel. My commitment to continuous 
            learning and improvement is evidenced by overcoming challenges and achieving goals like 
            solving over 200 DSA questions on LeetCode.
            <br /><br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

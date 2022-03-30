import React from "react";
import classes from "./About.module.css";
import bgImage from "../../images/BgImage.jpg";
import Rajendarji from "../../images/RajendarUncleji.jpeg";
import person4 from "../../images/person_4.jpg";
import Ajayji from "../../images/AjayUncleJi.jpeg";
import Arjun from "../../images/Arjun.jpeg"
import Krishna from "../../images/Krishna.jpeg"
import MohanLalJi from "../../images/MohanLalJi.jpeg"
import user from "../../images/user.jpg"


const About = () => {
  return (
    <>
      <div className={classes.banner}>
        <img src={bgImage} className={classes.backgroundImg} />
        <div className={classes.centered}>
          <h1 className={classes.bannerHeading}>ABOUT US</h1>
        </div>
      </div>
      <div className={classes.how}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/p3y2UTTXTQA"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        {/* <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY" className={classes.howVideo}></iframe> */}
        <div className={classes.howText}>
          <h2>Our Vision</h2>
          <p>
            Our vision is largely based on collaborations and the outcome of our partnerships. 
            We believe that by working together, we can discover, develop, and deliver the best value to our customers.
            Our business collaborations are not only based on shared interests, but also on respect, trust and ethical standards.
          </p>
        </div>
      </div>

      <div className={classes.trust}>
        <div className={classes.trustText}>
          <h2>We Are A Trusted Company</h2>
          <p>
            We endeavor to achieve the best quality standards in the pharmaceutical industry in India.
            Our total quality management system adheres to cGMP regulation,
            and we aim at developing novel and differentiating scientific solutions through innovative products which are designed to improve quality of life.
          </p>
        </div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/JLJP_5opjgU"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className={classes.services}>
        <div>
          <i class="fa fa-truck" style={{ fontSize: "40px" }}></i>
          <h5>Free Shipping</h5>
        </div>
        <div>
          <i class="fa fa-refresh" style={{ fontSize: "40px" }}></i>
          <h5>Free Returns</h5>
        </div>
        <div>
          <i class="fa fa-question-circle" style={{ fontSize: "40px" }}></i>
          <h5>Customer Support</h5>
        </div>
      </div>
      <h2 className={classes.teamHead}>The Team</h2>
      <div className={classes.team}>
        {/* <div>
          <img src={user} className={classes.teamImg} />
          <h3>LATE SHREE DR. MOHAN LAL JI PATPATIA</h3>
          <h6>Founder(18/04/1916 - 18-08-2004)</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>
        <div>
          <img src={Rajendarji} className={classes.teamImg} />
          <h3>LATE SHREE RAJENDAR PATPATIA</h3>
          <h6>Co-Founder(31/10/1952 - 11-09-2020)</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>
        <div>
          <img src={Ajayji} className={classes.teamImg} />
          <h3>LATE SHREE AJAY PATPATIA</h3>
          <h6>Co-Founder(16/02/1972 - 15-09-2020)</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div> */}
        <div>
          <img src={user} className={classes.teamImg} />
          <h3>Sumit Arora</h3>
          <h6>Co-Founder</h6>
        </div>
        <div>
          <img src={user} className={classes.teamImg} />
          <h3>Sree Harsha</h3>
          <h6>Co-Founder</h6>
        </div>
      </div>
    </>
  );
};

export default About;

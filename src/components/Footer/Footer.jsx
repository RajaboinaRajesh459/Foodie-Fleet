import React, { useState } from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import logo from "../../assets/images/res-logo.png";
import "../../styles/footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [showForm, setShowForm] = useState(true);
  const [showThankYou, setShowThankYou] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      from_email: email,
      to_email: "rajaboinarajesh459@gmail.com",
      message: "Subscribe to our newsletter",
    };

    console.log("Sending email with params:", templateParams);

    emailjs
      .send(
        "service_mz7djw9",
        "template_ui8485c",
        templateParams,
        "0F2LV24D_2GO1NpFY"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setShowThankYou(true);
          setShowForm(false); 
          setTimeout(() => {
            setShowThankYou(false); 
            setShowForm(true); 
            setEmail(""); 
          }, 2000);
        },
        (error) => {
          console.error("Error sending email:", error);
          alert(`Failed to send subscription email. Error: ${error.text}`);
        }
      );
  };

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className="footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>Foodie Fleet</h5>
              <p>Foodie Fleet Satisfy Your Cravings, Anytime, Anywhere</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Delivery Time</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>

              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Friday - Saturday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <p>Location: Andhrapradesh, Vijayawada-502355, India</p>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Phone: 8179204988</span>
              </ListGroupItem>

              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Email: rajaboinarajesh459@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Newsletter</h5>
            {showForm && (
              <form onSubmit={sendEmail} className="newsletter">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                />
                <button type="submit" className="sub-btn-1">
                  <i className="ri-send-plane-line"></i>
                </button>
              </form>
            )}
            {showThankYou && (
              <p className="thank-you-message">Thank you for subscribing!</p>
            )}
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text">
              Copyright - 2024, website made by Rajesh. All Rights Reserved.
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0">Follow us: </p>
              <span>
                <Link to="https://www.instagram.com/rajesh_rajaboina9/">
                  <i className="ri-instagram-line"></i>
                </Link>
              </span>
              <span>
                <Link to="https://github.com/RajaboinaRajesh459">
                  <i className="ri-github-line"></i>
                </Link>
              </span>
              <span>
                <Link to="https://www.linkedin.com/in/rajesh-rajaboina-8abb3822a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                  <i className="ri-linkedin-line"></i>
                </Link>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

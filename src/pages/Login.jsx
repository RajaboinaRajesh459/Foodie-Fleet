import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext"; 

const Login = () => {
  const navigate = useNavigate();
  const loginNameRef = useRef();
  const loginPasswordRef = useRef();
  const { login } = useAuth();

  const submitHandler = (e) => {
    e.preventDefault();
    
    const email = loginNameRef.current.value;
    const password = loginPasswordRef.current.value;

    if (email === "rajaboinarajesh459@gmail.com" && password === "Rajesh@98R") {
      login(() => {
        navigate("/"); 
      });
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <Helmet title="Login">
      <CommonSection title="Login" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={loginNameRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    ref={loginPasswordRef}
                  />
                </div>
                <button type="submit" className="addTOCart__btn">
                  Login
                </button>
              </form>
              <Link to="/register">
                Don't have an account? Create an account
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;

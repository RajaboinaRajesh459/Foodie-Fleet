
import React from 'react';
import { useSelector } from 'react-redux';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/common-section/CommonSection';
import { Container, Row, Col } from 'reactstrap';

const UserProfile = () => {
  const user = useSelector(state => state.auth.user);

  if (!user) {
    return <p>User not found</p>;
  }

  return (
    <Helmet title="User Profile">
      <CommonSection title="User Profile" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <div className="user-details">
                <h2>User Details</h2>
                <p>Email: {user.email}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default UserProfile;

import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/shopping-cart/cartSlice';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import successImage from '../assets/images/checked.png'; // Replace with your own success image path
import '../styles/payment-success.css'; // Create and style this CSS file
    

const PaymentSuccess = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cartActions.clearCart());
  }, [dispatch]);

  return (
    <Container className="payment-success">
      <Row className="justify-content-center">
        <Col lg="6" md="8" className="text-center">
          <img src={successImage} alt="Payment Successful" className="success-image mb-4" />
          <h2>Payment Successful!</h2>
          <p className="mt-3">Thank you for your purchase. Your order has been successfully placed.</p>
          <Button color="primary" className="mt-4">
            <Link to="/home" className="text-white">Go to Home</Link>
          </Button>
          <Button color="secondary" className="mt-4 ml-2">
            <Link to="/cart" className="text-white">View Orders</Link>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
export default PaymentSuccess
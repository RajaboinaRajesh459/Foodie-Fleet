import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";
import { useAuth } from "../../../AuthContext";
import { ToastContainer,toast } from "react-toastify";
import "../../../styles/product-card.css";
import 'react-toastify/dist/ReactToastify.css';


const ProductCard = (props) => {
  const { id, title, image01, price } = props.item;
  const dispatch = useDispatch();
  const { isAuthenticated, setPendingAction } = useAuth();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
      })
    );
    window.scrollTo({ top: 0, behavior: 'smooth' });
    toast.success("Item added to cart!");
  };

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      setPendingAction(addToCart);
      window.location.href = "/login"; 
    } else {
      addToCart();
    }
  };

  return (
    <div className="product__item">
      <div className="product__img">
        <img src={image01} alt="product-img" className="w-50" />
      </div>
      <div className="product__content">
        <h5>
          <Link to={`/foods/${id}`}>{title}</Link>
        </h5>
        <div className="d-flex align-items-center justify-content-between">
          <span className="product__price">₹{price}</span>
          <button className="addTOCart__btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <ToastContainer/>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

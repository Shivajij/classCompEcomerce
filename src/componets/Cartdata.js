// components/Cart.js
import React, { Component } from "react";
import { connect } from "react-redux";
import "./Allstyles/Cart.css";
import { removeTocart } from "../Redux/action/Cartaction";

class Cartdata extends Component {
  handleRemove = (id) => {
    this.props.removeFromCart(id);
  };
  componentDidCatch(){
    
  }

  render() {
    const { carts } = this.props;

    return (
      <div className="cart-container">
        <h4>Cart Component</h4>
        {carts.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          carts.map((ele, index) => ( 
            <div key={index} className="cart-item">
              <img src={ele.image} alt="img" />
              <div>
                <p style={{ fontWeight: "bold" }}>Price: {ele.price}</p>
                <p>{ele.title}</p>
                <button
                  className="remove-button"
                  onClick={() => this.handleRemove(ele.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  // console.log(state,"in cart")
  return {
    carts: state.cart.cart,
  };
};

const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (id) => dispatch(removeTocart(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cartdata);

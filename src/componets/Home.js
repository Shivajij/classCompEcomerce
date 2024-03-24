import React, { Component } from "react";
import { connect } from "react-redux";
import { getProduct } from "../Redux/action/Productaction";
import "./Allstyles/Home.css"
import { addTocart } from "../Redux/action/Cartaction";
import { Link } from "react-router-dom";

class Home extends Component {

  componentDidMount() {
    this.props.actionFunction();
  }

  handleAddTocart(product) {
      this.props.addTcart(product);
  }
  

  errHandlingComp(){
    const {loading,err}=this.props;
    if(loading){
        return(<div>Loading...</div>)
    }else if(err){
        return(<div>Something went wrong...</div>)
    }else{
        return null;
    }
  }

  render() {
    const {product} = this.props;
  
    return (
      <div className="product-container">
        <h4>Home Page</h4>
        {this.errHandlingComp()}
        <div className="product-row">
          {product.map((ele) => (
            <div key={ele.id} className="product-card" onClick={()=>this.handleAddTocart(ele)}>
              <Link to={"/cart"}>
              <img alt="img" src={ele.image} height={100} width={150} />
              <p style={{ fontWeight: "bold" }}>Rs: {ele.price}</p>
              <p>{ele.title}</p></Link>
            </div>
          ))}
        </div>
      </div>
    );
  } 
}

const mapStateToProps = (state) => {
  console.log('Redux State:', state); 
  return {
    product: state.products.products,
    loading: state.products.isLoading,
    err: state.products.isErr,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actionFunction: () => dispatch(getProduct()),
    addTcart: (product) => dispatch(addTocart(product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

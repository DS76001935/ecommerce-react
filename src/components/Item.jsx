// import { styles } from "../styles/Item.module.css";

import React, { useContext } from "react";
import { CartContext } from "./Context/cart-context";

const Item = (props) => {
  const { id, name, price, img, desc } = props.item;
  const { addToCart, cartItems } = useContext(CartContext);

  const cartItemAmount = cartItems[id];
  return (
    <div
      className="card"
      style={{
        width: "20rem",
        margin: "10px",
        padding: "20px",
        height: "auto",
        textAlign: "center",
        borderRadius: "10px",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        transition: "0.3s",
        backgroundColor: "white",
        color: "black",
        border: ".5px solid black",
      }}
    >
      <div className="card-body">
        <img
          src={img}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "contain",
            borderRadius: "10px",
            boxShadow: "0 4px 8px 0 rgba(0 0 0 0 .2)",
            transition: "0.3s",
            border: ".5px solid black",
            marginBottom: "10px",
            aspectRatio: "3/2",
          }}
          alt=""
        />
        <h4 className="card-title">{name}</h4>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          Rs. : {price} /-
        </h6>
        <p className="card-text">{desc}</p>
        <button
          style={{
            margin: "10px",
            fontWeight: "bolder",
            border: "1px solid black",
            borderRadius: "5px",
            padding: "5px",
            width: "100%",
          }}
          className="btn btn-success"
          type="button"
          onClick={() => addToCart(id)}
        >
          Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
      </div>
    </div>
  );
};

export default Item;

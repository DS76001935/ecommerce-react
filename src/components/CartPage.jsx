import { Link } from "react-router-dom";
import styles from "../styles/CartPage.module.css";
import React from "react";
import { foodItems } from "./Store/PRODUCTS";
import { CartContext } from "./Context/cart-context";
import CartItem from "./CartItem";
import CartPurchase from "./CartPurchase";

const CartPage = (props) => {
  const {
    cartItems,
    removeFromCart,
    addToCart,
    removeEntirely,
    getTotalCartValue,
  } = React.useContext(CartContext);
  
  const totalPrice = getTotalCartValue();
  
  return (
    <div className={styles.CartPage}>
      <div className="row">
        <div className={`col-md-8 ${styles.cartItemContainer}`}>
          {totalPrice > 0 ? <h3>Your Product Details</h3> : ""}
          <div className="row border-top border-bottom">
            {totalPrice > 0 ? (
              foodItems?.map((item) => {
                if (cartItems[item.id] !== 0) {
                  return (
                    <div className={styles.cartItemSection}>
                      <CartItem
                        item={item}
                        removeFromCart={removeFromCart}
                        cartItems={cartItems}
                        addToCart={addToCart}
                        removeEntirely={removeEntirely}
                      />
                    </div>
                  );
                }
              })
            ) : (
              <>
                <h3>Your Cart Is Empty!</h3>
              </>
            )}
            <div className="back-to-shop">
              <Link className={styles.redirectionLink} to="/">
                Back To Shop
              </Link>
            </div>
          </div>
        </div>
        {totalPrice > 0 ? (
          <CartPurchase
            totalPrice={totalPrice}
            cartItems={cartItems}
            foodItems={foodItems}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CartPage;

import React from "react";
import styles from "../styles/Dashboard.module.css";
import FoodItems from "./FoodItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { foodItems } from "./Store/PRODUCTS";

const Dashboard = (props) => {
  const [cartItems, setCartItems] = React.useState([]);
  React.useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <>
      <h1>Dashboard</h1>
      <Link to="/cart">
        <FontAwesomeIcon className={styles.cartStyle} icon={faCartShopping} />
        <div className={styles.itemCount}>{cartItems.length}</div>
      </Link>
      <div className={styles.dashboardContainer}>
        <FoodItems
          foodItems={foodItems}
          onNext={(value) => setCartItems([...cartItems, { value }])}
        ></FoodItems>
      </div>
    </>
  );
};
export default Dashboard;

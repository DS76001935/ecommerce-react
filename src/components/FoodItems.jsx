import React from "react";
import styles from "../styles/FoodItem.module.css";
import Item from "./Item";

const FoodItems = (props) => {
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    setItems(props.foodItems);
  }, [props.foodItems]);
  return (
    <div className={styles.foodItemContainer}>
      {items?.map((item) => {
        return (
          <Item
            key={item.id}
            item={item}
            onNext={(value) => props.onNext(value)}
          />
        );
      })}
    </div>
  );
};

export default FoodItems;

import styles from "../styles/CartPage.module.css";

const CartItem = (props) => {
  const {
    item,
    removeFromCart,
    cartItems,
    addToCart,
    removeEntirely,
    updateCartItemValue,
  } = props;

  return (
    <>
      <div className="row main align-items-center">
        <div className="col-2">
          <img className="img-fluid" alt="" src={item?.img} />
        </div>
        <div className="col">
          <div className="row text-muted" style={{ fontSize: "18px" }}>
            <b>{item?.name}</b>
          </div>
          <hr />
          <div className="row" style={{ fontSize: "10px" }}>
            {item?.desc}
          </div>
        </div>
        <div className={`${styles.itemQuantityBar} col`}>
          <button
            className="btn btn-default"
            onClick={() => addToCart(item.id)}
          >
            +
          </button>
          <input
            type="text"
            className="form-control"
            onChange={(e) => updateCartItemValue(e.target.value, item.id)}
            style={{
              margin: "10px",
              width: "50px",
              textAlign: "center",
              fontWeight: "bolder",
              border: "1px solid black",
              borderRadius: "5px",
              padding: "5px",
            }}
            value={cartItems[item.id]}
          />
          <button
            className="btn btn-default"
            onClick={() => removeFromCart(item.id)}
          >
            -
          </button>
        </div>
        <div className="col">
          <b>Rs. {item?.price}</b>
          <button
            onClick={() => removeEntirely(item.id)}
            style={{
              margin: "20px",
              fontWeight: "bolder",
              border: "1px solid black",
              borderRadius: "5px",
              padding: "5px",
              width: "30%",
            }}
            className="btn btn-danger"
          >
            <span className="close">&#10005;</span>
          </button>
        </div>
      </div>
    </>
  );
};
export default CartItem;

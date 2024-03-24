import styles from "../styles/CartPage.module.css";

const CartPurchase = (props) => {
  const { totalPrice } = props;

  return (
    <>
      <div className={`col-md-4 ${styles.cartPurchaseBar}`}>
        <div>
          <h5>Summary</h5>
        </div>
        <hr />
        <form>
          <p>GIVE CODE</p>
          <input id="code" placeholder="Enter your code" />
        </form>
        <div
          className="row"
          style={{
            borderTop: "1px solid rgba(0,0,0,.1)",
            padding: "2vh 0",
          }}
        >
          <hr />

          <div className="row">
            <div className="col text-left">
              <b>CGST</b>
            </div>
            <div className="col text-right">5.03</div>
          </div>
          <div className="row">
            <div className="col text-left">
              <b>SGST</b>
            </div>
            <div className="col text-right">8.03</div>
          </div>
          <div className="row">
            <div className="col text-left">
              <b>Delivery Charge</b>
            </div>
            <div className="col text-right">50.00</div>
          </div>
          <br />
          <br />
          <hr />
          <div className="col">
            <b>TOTAL PRICE</b>
          </div>
          <div className="col text-right">
            Rs. {Math.floor(totalPrice + 5.03 + 8.03 + 50.0)}
          </div>
        </div>
        <button className="btn btn-primary">CHECKOUT</button>
      </div>
    </>
  );
};

export default CartPurchase;

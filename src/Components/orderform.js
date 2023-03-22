import React from "react";
import { Link } from "react-router-dom";
import "./Style/orderform.css";

class Orderform extends React.Component {
  render() {
    return (
      <div className="order-form">
        <form>
          <h2> Custermor Details</h2>
          <div className="form-block">
          <div className="form-item">
            <label className="order-label">Custermor Name</label>
            <input
              className="order-input"
              type="text"
              placeholder="your name"
              id="cus-name"
              name="cus-name"
            ></input>
          </div>
          </div>

          <h2> Order Address</h2>
          <div className="form-block">
            <div className="form-item">
              <label className="order-label">Line1</label>
              <input
                className="order-input"
                type="text"
                placeholder="Address line 1"
                id="add--line-1"
                name="add--line-1"
              ></input>
            </div>
            <div className="form-item">
              <label className="order-label">Line2</label>
              <input
                className="order-input"
                type="text"
                placeholder="Address line 2"
                id="add--line-2"
                name="add--line-2"
              ></input>
            </div>
            <div className="form-item">
              <label className="order-label">Line3</label>
              <input
                className="order-input"
                type="text"
                placeholder="Address line 2"
                id="add--line-3"
                name="add--line-3"
              ></input>
            </div>
          </div>
          <h2>Payment Method</h2>
          <div className="form-block">
            <div className="form-item">
              <label className="order-label">Card Number</label>
              <input
                className="order-input"
                type="text"
                placeholder="credit card number"
                id="card-number"
                name="card-number"
              ></input>
            </div>
            <div className="form-item">
              <label className="order-label">Expire Date</label>
              <input
                className="order-input"
                type="date"
                placeholder="expiere date"
                id="expire-date"
                name="expire-date"
              ></input>
            </div>
            <div className="form-item">
              <label className="order-label">CVC</label>
              <input
                className="order-input"
                type="text"
                placeholder=""
                id="cvc"
                name="cvc"
              ></input>
            </div>
          </div>
          <button type="submit" className="confirm-order-button"><Link to='/'>CONFIRM ORDER</Link>
          </button>
        </form>
      </div>
    );
  }
}

export default Orderform;

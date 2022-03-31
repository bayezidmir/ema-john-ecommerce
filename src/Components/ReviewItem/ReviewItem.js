import { faTrash, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ReviewItem.css";

const ReviewItem = ({ productInfo, deleteItem }) => {
  const { img, name, price, quantity, shipping, id } = productInfo;

  return (
    <div className="review-item-container">
      <div className="item-detail">
        <img src={img} alt="" />
        <div className="item-info">
          <p style={{ fontSize: "21px" }} title={name}>
            {name.length > 20 ? name.slice(0, 20) + "..." : name}
          </p>
          <p>
            <small>
              Price: <span className="orange-color">{price}</span>
            </small>
          </p>
          <p>
            <small>
              Shipping Charge: <span className="orange-color">{shipping}</span>
            </small>
          </p>
          <p>
            <small>
              Quantity: <span className="orange-color">{quantity}</span>
            </small>
          </p>
        </div>
      </div>
      <div>
        <button className="delete-button" onClick={() => deleteItem(id)}>
          <FontAwesomeIcon
            style={{ color: "#EA2027", padding: "8px", fontSize: "27px" }}
            icon={faTrashAlt}
          />
        </button>
      </div>
    </div>
  );
};

export default ReviewItem;

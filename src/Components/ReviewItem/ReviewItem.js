import React from "react";
import "./ReviewItem.css";

const ReviewItem = ({ productInfo }) => {
  const { img, name, price, quantity, shipping } = productInfo;
  return (
    <div>
      <h4>{name}</h4>
    </div>
  );
};

export default ReviewItem;

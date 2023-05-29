import React from 'react';
import { BiMinus, BiPlus } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';

const CartItem = ({ _id, name, image, price, countInStock }) => {
  return (
    <article className="cart-item">
      <div>
        <img src={image} alt={name} className="img" />
      </div>
      <p className="prd-name">{name}</p>
      <div className="qty-selector">
        <button className="btn icon-btn">
          <BiPlus className="icon" />
        </button>
        <p>1</p>
        <button className="btn icon-btn">
          <BiMinus className="icon" />
        </button>
      </div>
      <p>{price}</p>
      <button className="btn icon-btn">
        <MdDelete className="icon minus-icon" />
      </button>
    </article>
  );
};

export default CartItem;

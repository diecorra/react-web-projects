import React from 'react';
import { BiMinus, BiPlus } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import { useGlobalContext } from '../context/context';
import formatNumber from '../utils/formatNumber';

const CartItem = ({ _id, name, image, price, qty, countInStock }) => {
  const { deleteItem, addItem, decItem } = useGlobalContext();
  const itemAddLimit = (_id) => {
    return qty + 1 > countInStock ? qty : addItem(_id);
  };

  const noItem = (_id) => {
    return qty - 1 < 1 ? deleteItem(_id) : decItem(_id);
  };

  return (
    <article className='cart-item'>
      <div>
        <img src={image} alt={name} className='img' />
      </div>
      <p className='prd-name'>{name}</p>
      <div className='qty-selector'>
        <button className='btn icon-btn' onClick={() => itemAddLimit(_id)}>
          <BiPlus className='icon' />
        </button>
        <p>{qty}</p>
        <button className='btn icon-btn' onClick={() => noItem(_id)}>
          <BiMinus className='icon' />
        </button>
      </div>
      <p>{formatNumber(price)}</p>
      <button className='btn icon-btn' onClick={() => deleteItem(_id)}>
        <MdDelete className='icon minus-icon' />
      </button>
    </article>
  );
};

export default CartItem;

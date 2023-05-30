import React from 'react';
import { HiShoppingBag } from 'react-icons/hi';
import { useGlobalContext } from '../context/context';

const Navbar = () => {
  const { itemCounter } = useGlobalContext();
  return (
    <nav className='nav'>
      <header className='nav-header'>
        <div className='nav-brand'>
          <h4>CartShop</h4>
        </div>
        <div className='nav-cart'>
          <HiShoppingBag className='icon nav-icon' />
          <div className='cart-counter'>{itemCounter}</div>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;

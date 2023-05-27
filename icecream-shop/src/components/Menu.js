import React, { useEffect, useState } from 'react';
import IceCream from './IceCream';
import axios from 'axios';
import data from '../fakeData';

const url = 'https://react--course-api.herokuapp.com/api/v1/data/gelateria';

const Menu = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [products, setProducts] = useState(data);
  const [selected, setSelected] = useState(0);
  const [categories, setCategories] = useState([]);
  const [filterProducts, setFilterProducts] = useState(products);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const response = await axios.get(url);
        setProducts(response.data.data);
        setFilterProducts(response.data.data);
        const newCategories = Array.from(
          new Set(response.data.data.map((el) => el.categoria))
        );
        newCategories.unshift('all');
        setCategories(newCategories);
        setIsLoading(false);
        setIsError(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setIsError(true);
      }
    })();
  }, []);

  const filter = (categoria, index) => {
    setSelected(index);
    categoria === 'all'
      ? setFilterProducts(data)
      : setFilterProducts(
          products.filter((el) => (el.categoria === categoria ? el : ''))
        );
  };

  return (
    <div className='container'>
      <h4 style={{ textAlign: 'center', textTransform: 'uppercase' }}>
        Our Choices
      </h4>
      {!isLoading && !isError ? (
        <>
          <div className='lista-categoria'>
            {categories.map((categoria, index) => {
              return (
                <button
                  onClick={() => filter(categoria, index)}
                  className={`btn btn-selector ${
                    index === selected && 'active'
                  }`}
                  key={index}
                >
                  {categoria}
                </button>
              );
            })}
          </div>
          <div className='vetrina'>
            {filterProducts.map((el) => (
              <IceCream key={el.id} {...el} />
            ))}
          </div>
        </>
      ) : !isLoading && !isError ? (
        <h4
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          Error...
        </h4>
      ) : (
        <h4
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          Loading..
        </h4>
      )}
    </div>
  );
};

export default Menu;

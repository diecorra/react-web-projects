import React, { useEffect, useState } from 'react';
import { Hero, Cocktails, Loading, ErrorMessage } from '../components';
import { FaSearch } from 'react-icons/fa';
import Lottie from 'react-lottie';
import animationData from '../assets/animation/drink-animation.json';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';
import useTitle from '../useTitle';

const HomeScreen = () => {
  useTitle('Home');
  const {
    query,
    isLoading,
    isError,
    data,
    count,
    searchCocktail,
    deleteScrollPosition,
    scrollPosition,
  } = useGlobalContext();
  const [input, setInput] = useState(query);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchCocktail(input);
  };

  useEffect(() => {
    if (scrollPosition) {
      window.scrollTo(0, scrollPosition);
      deleteScrollPosition();
    }
  }, []);

  return (
    <>
      <Hero>
        <div className='home-hero'>
          <div className='home-hero-text'>
            <div className='home-hero-title'>
              <h2 className='brand-color'>WIKI DRINK</h2>
              <h4>All the cocktails of the world just a click away.</h4>
            </div>
            <p>
              Wiki Drink is an international database that puts at your
              disposal, <span className='brand-color'>free of charge</span>, the
              recipes of the most important and well-known cocktails in the
              world.
            </p>
            <Link to='/about' className='btn btn-primary'>
              Find out more
            </Link>
          </div>
          <div className='home-hero-img'>
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                reverse: true,
                animationData,
                rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice',
                },
              }}
              height={350}
            />
          </div>
        </div>
      </Hero>
      <section className='container home-screen'>
        <div className='search-bar'>
          <div className='form-container'>
            <form onSubmit={handleSubmit}>
              <label htmlFor='drink'>
                <h4>Search your Drink</h4>
              </label>
              <div className='input-search'>
                <input
                  type='text'
                  id='drink'
                  className='input'
                  placeholder={query}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button className='btn icon-btn' type='submit'>
                  <FaSearch className='icon' />
                </button>
              </div>
            </form>
          </div>
          <p className='result'>{count} results</p>
        </div>
        {!isLoading && isError ? (
          <ErrorMessage>No Cocktail found!</ErrorMessage>
        ) : !isLoading && !isError ? (
          <Cocktails data={data.drinks} />
        ) : (
          <Loading />
        )}
      </section>
    </>
  );
};

export default HomeScreen;

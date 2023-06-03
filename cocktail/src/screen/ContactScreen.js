import React from 'react';
import { Hero } from '../components';
import backImage from '../assets/image/Contact-hero.png';
import useTitle from '../useTitle';
const ContactScreen = () => {
  useTitle('Contact us');
  return (
    <>
      <Hero img={backImage} disableOverlay>
        <div className='contact-hero container'>
          <div className='contact-hero-text'>
            <div className='contact-hero-title'>
              <h2 className='contact-title'>
                Would you like to add a Cocktail?
              </h2>
              <h4 className='contact-subtitle'>
                Our team is always available to evaluate any new recipes and to
                add them in our database.
              </h4>
            </div>
          </div>
          <div className='contact-form-container container'>
            <form
              action='https://formspree.io/f/xayzgeyo'
              method='POST'
              className='contact-form container'
            >
              <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  className='input'
                  placeholder='Name'
                />
                <hr />
              </div>
              <div className='form-group'>
                <label htmlFor='surname'>Surname</label>
                <input
                  type='text'
                  id='surname'
                  name='surname'
                  className='input'
                  placeholder='Surname'
                />
                <hr />
              </div>
              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className='input'
                  placeholder='name@example.com'
                />
                <hr />
              </div>
              <div className='form-group'>
                <label htmlFor='phone'>Phone</label>
                <input
                  type='phone'
                  id='phone'
                  name='phone'
                  className='input'
                  placeholder='555 555-5555'
                />
                <hr />
              </div>
              <div className='form-group'>
                <label htmlFor='recipe'>Recipe</label>
                <input
                  type='text'
                  id='recipe'
                  name='recipe'
                  className='input'
                  placeholder='Describe your recipe..'
                />
                <hr />
              </div>
              <button type='submit' className='btn btn-primary'>
                Send Recipe!
              </button>
            </form>
          </div>
        </div>
      </Hero>
    </>
  );
};

export default ContactScreen;

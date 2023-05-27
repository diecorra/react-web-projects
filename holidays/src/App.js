import Title from './components/Title';
import Holiday from './components/Holiday';
import { useEffect, useState } from 'react';
import axios from 'axios';

const url = 'https://react--course-api.herokuapp.com/api/v1/data/vacanze';

function App() {
  return (
    <section className='section-center'>
      <div className='container'>
        <Title text='Our Holidays' />
        <Holiday />
      </div>
    </section>
  );
}

export default App;

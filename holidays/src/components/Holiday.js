import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SingleHoliday from './SingleHoliday';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const url = 'https://react--course-api.herokuapp.com/api/v1/data/vacanze';

const Holiday = () => {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(0);

  const prevHoliday = () => {
    setSelected((oldValue) => {
      return oldValue - 1 < 0 ? data.data.length - 1 : oldValue - 1;
    });
  };

  const nextHoliday = () => {
    setSelected((oldValue) => {
      return oldValue + 1 === data.data.length ? 0 : oldValue + 1;
    });
  };

  const getData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.log('ERROR: ', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (data.success) {
    return (
      <>
        {data.data.length > 0 ? (
          <SingleHoliday
            {...data.data[selected]}
            next={nextHoliday}
            prev={prevHoliday}
          />
        ) : (
          <h4>No Holiday</h4>
        )}
      </>
    );
  } else {
    return (
      <div>
        <AiOutlineLoading3Quarters />
      </div>
    );
  }
};

export default Holiday;

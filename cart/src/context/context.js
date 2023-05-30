import axios from 'axios';
import React, { useContext, useEffect, useReducer } from 'react';
import {
  ADD_ITEM,
  DATA_FETCHING_FAIL,
  DATA_FETCHING_STARTED,
  DATA_FETCHING_SUCCESS,
  DEC_ITEM,
  DELETE_ITEM,
  EMPTY_CART,
} from './actions';
import reducer from './reducer';
const url = 'https://react--course-api.herokuapp.com/api/v1/data/cart';

const AppContext = React.createContext();
const initialState = {
  products: [],
  isLoading: true,
  isError: false,
  total: 0,
  itemCounter: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const deleteItem = (_id) => {
    dispatch({ type: DELETE_ITEM, payload: _id });
  };

  const deleteAll = () => {
    dispatch({ type: EMPTY_CART });
  };

  const addItem = (_id) => {
    dispatch({ type: ADD_ITEM, payload: _id });
  };

  const decItem = (_id) => {
    dispatch({ type: DEC_ITEM, payload: _id });
  };

  useEffect(() => {
    (async () => {
      dispatch({ type: DATA_FETCHING_STARTED });
      try {
        const response = await axios.get(url);
        dispatch({ type: DATA_FETCHING_SUCCESS, payload: response.data.data });
      } catch (error) {
        dispatch({ type: DATA_FETCHING_FAIL });
        console.log(error);
      }
    })();
  }, []);

  return (
    <AppContext.Provider
      value={{ ...state, deleteItem, deleteAll, addItem, decItem }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };

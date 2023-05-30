import {
  ADD_ITEM,
  DATA_FETCHING_FAIL,
  DATA_FETCHING_STARTED,
  DATA_FETCHING_SUCCESS,
  DEC_ITEM,
  DELETE_ITEM,
  EMPTY_CART,
  ITEM_COUNTER,
  TOTAL_COST,
} from './actions';

const reducer = (state, { type, payload }) => {
  if (type === DATA_FETCHING_STARTED) {
    return { ...state, isLoading: true };
  }
  if (type === DATA_FETCHING_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      isError: false,
      products: payload.map((el) => {
        return { ...el, qty: 2 };
      }),
    };
  }
  if (type === DATA_FETCHING_FAIL) {
    return { ...state, isLoading: false, isError: true };
  }
  if (type === EMPTY_CART) {
    return { ...state, products: [] };
  }
  if (type === DELETE_ITEM) {
    return {
      ...state,
      products: state.products.filter((el) => el._id !== payload),
    };
  }
  if (type === ADD_ITEM) {
    return {
      ...state,
      products: state.products.map((el) => {
        return payload === el._id ? { ...el, qty: el.qty + 1 } : { ...el };
      }),
    };
  }
  if (type === DEC_ITEM) {
    return {
      ...state,
      products: state.products.map((el) => {
        return payload === el._id ? { ...el, qty: el.qty - 1 } : { ...el };
      }),
    };
  }
  if (type === TOTAL_COST) {
    return {
      ...state,
      total: state.products.reduce((total, item) => {
        return total + item.qty * item.price;
      }, 0),
    };
  }
  if (type === ITEM_COUNTER) {
    return {
      ...state,
      itemCounter: state.products.reduce((total, item) => {
        return total + item.qty;
      }, 0),
    };
  }
  return state;
};

export default reducer;

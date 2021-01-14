import React, { createContext, useReducer } from 'react';
import OrderReducer from './OrderReducer';

// Initial State
const intialState = {
  orderactions: []
};

// 创建 上下文
export const OrderContext = createContext(intialState);

// Provider component
export const OrderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(OrderReducer, intialState);

  // actions
  function orderDate(checkIn, checkOut) {
    dispatch({
      type: 'SELECTED_DATE',
      payload: [checkIn, checkOut,
    });
  }

  function orderRoomType(type) {
    dispatch({
      type: 'SELECTED_ROOMTYPE',
      payload: type
    });
  }

  function orderPerson() {
    dispatch({
      type: 'SELECTED_PERSON',
    });
  }

  function orderRoomNumber() {
    dispatch({
      type: 'SELECTED_ROOMNUMBER',
    });
  }

  function orderFood() {
    dispatch({
      type: "SELECTED_FOOD",
    });
  }

  return (<OrderContext.Provider value={{
    orderactions: state.orderactions,
    orderDate,
    orderPerson,
    orderRoomNumber,
    orderFood,
  }}></OrderContext.Provider >);

};

import React, { createContext, useReducer } from 'react';
import OrderReducer from './OrderReducer';

// 订单表格初始状态
const intialState = {};

// 创建 订单上下文
export const OrderContext = createContext(intialState);

// Provider component
export const OrderCtxProvider = ({ children }) => {
  const [state, dispatch] = useReducer(OrderReducer, intialState);


  function orderDateIn(date) {
    dispatch({
      type: 'SELECTED_DATE_IN',
      selectedDateIn: date,
    });
  }

  function orderDateOut(date) {
    dispatch({
      type: 'SELECTED_DATE_OUT',
      selectedDateOut: date,
    });
  }

  function orderRoomType(type) {
    dispatch({
      type: 'SELECTED_ROOMTYPE',
    });
  }

  function orderAdult(value) {
    dispatch({
      type: 'SELECTED_ADULT_NUMBER',
      adultNumber: value
    });
  }
  function orderChildren(value) {
    dispatch({
      type: 'SELECTED_CHILDREN_NUMBER',
      childrenNumber: value,
    });
  }
  function orderBaby(value) {
    dispatch({
      type: 'SELECTED_Baby_NUMBER',
      babyNumber: value,
    });
  }

  function orderRoomNumber(value) {
    dispatch({
      type: 'SELECTED_ROOM_NUMBER',
      roomNumber: value,
    });
  }

  function orderFood(choiceOfFood) {
    dispatch({
      type: 'SELECTED_FOODTYPE',
      foodType: choiceOfFood,
    });
  }

  return (
    <OrderContext.Provider value={{
      orderInfo: state.state,
      orderDateIn,
      orderDateOut,
      orderRoomType,
      orderAdult,
      orderChildren,
      orderBaby,
      orderRoomNumber,
      orderFood,
    }}>
      {children}
    </OrderContext.Provider>
  );
};

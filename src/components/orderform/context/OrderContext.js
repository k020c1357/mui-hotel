import React, { createContext, useReducer } from 'react';
import OrderReducer from './OrderReducer';

// 订单表格初始状态
const intialState = {
  orderInfo: {},
};

// 创建 订单上下文
export const OrderContext = createContext(intialState);

// Provider component
export const OrderCtxProvider = ({ children }) => {
  const [state, dispatch] = useReducer(OrderReducer, intialState);
  const { orderInfo } = state;

  // actions
  function orderDateIn(date) {
    dispatch({
      type: 'SELECTED_DATE_IN',
      payload: date,
    });
  }

  function orderDateOut(date) {
    dispatch({
      type: 'SELECTED_DATE_OUT',
      payload: date,
    });
  }

  function orderRoomType(value) {
    dispatch({
      type: 'SELECTED_ROOMTYPE',
      payload: value,
    });
  }

  function orderAdult(value) {
    dispatch({
      type: 'SELECTED_ADULT_NUMBER',
      payload: value,
    });
  }
  function orderChildren(value) {
    dispatch({
      type: 'SELECTED_CHILDREN_NUMBER',
      payload: value,
    });
  }
  function orderBaby(value) {
    dispatch({
      type: 'SELECTED_Baby_NUMBER',
      payload: value,
    });
  }

  function orderRoomNumber(value) {
    dispatch({
      type: 'SELECTED_ROOM_NUMBER',
      payload: value,
    });
  }

  function orderFood(choiceOfFood) {
    dispatch({
      type: 'SELECTED_FOODTYPE',
      payload: choiceOfFood,
    });
  }

  return (
    <OrderContext.Provider
      value={{
        orderInfo,
        orderDateIn,
        orderDateOut,
        orderRoomType,
        orderAdult,
        orderChildren,
        orderBaby,
        orderRoomNumber,
        orderFood,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

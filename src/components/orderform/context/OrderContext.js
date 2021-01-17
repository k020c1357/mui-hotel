import React, { createContext, useReducer } from 'react';
import OrderReducer from './OrderReducer';

// 订单表格初始状态
const intialState = {
  selectedDateIn: new Date(),
  selectedDateOut: new Date(),
  roomType: 'Single',
  adultNumber: 1,
  childrenNumber: 1,
  babyNumber: 1,
  roomNumber: 1,
  foodType: {
    checkedA: true,
    checkedB: true,
  },
};

// 创建 订单上下文
export const OrderContext = createContext(intialState);

// Provider component
export const OrderCtxProvider = ({ children }) => {
  const [state, dispatch] = useReducer(OrderReducer, intialState);

  // actions and data
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

  function orderAdult(nums) {
    dispatch({
      type: 'SELECTED_ADULT_NUMBER',
      payload: nums,
    });
  }
  function orderChildren(nums) {
    dispatch({
      type: 'SELECTED_CHILDREN_NUMBER',
      payload: nums,
    });
  }
  function orderBaby(nums) {
    dispatch({
      type: 'SELECTED_Baby_NUMBER',
      payload: nums,
    });
  }

  function orderRoomNumber(nums) {
    dispatch({
      type: 'SELECTED_ROOM_NUMBER',
      payload: nums,
    });
  }

  function orderFood(value) {
    dispatch({
      type: 'SELECTED_FOODTYPE',
      payload: value,
    });
  }

  return (
    <OrderContext.Provider
      value={{
        state,
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

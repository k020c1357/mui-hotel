import React, { createContext, useReducer } from 'react';
import OrderReducer from './OrderReducer';

// Initial State
const intialState = {
  orderactions: {
    selectedDateIn: '',
    selectedDateOut: '',
    roomType: 'JapaneseStyle',
    personNumber: {
      adult: 0,
      children: 0,
      baby: 0,
    },
    roomNumber: 1,
    foodType: {
      checkedA: true,
      checkedB: true,
    },
  },
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
      payload: [checkIn, checkOut],
    });
  }

  function orderRoomType(type) {
    dispatch({
      type: 'SELECT_ROOMTYPE',
      payload: type,
    });
  }

  function orderPerson() {
    dispatch({
      type: 'SELECT_PERSON',
    });
  }

  function orderRoomNumber() {
    dispatch({
      type: 'SELECT_ROOMNUMBER',
    });
  }

  function orderFood() {
    dispatch({
      type: 'SELECT_FOOD',
    });
  }

  return (
    <OrderContext.Provider
      value={{
        orderactions: state.orderactions,
        orderDate,
        orderPerson,
        orderRoomNumber,
        orderFood,
      }}
    ></OrderContext.Provider>
  );
};

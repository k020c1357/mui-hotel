const orderReducer = (state, action) => {
  switch (action.type) {
    case 'SELECTED_DATE_IN':
      return {
        orderInfo: {
          ...state.orderInfo,
          selectedDateIn: action.payload,
        },
      };
    case 'SELECTED_DATE_OUT':
      return {
        orderInfo: {
          ...state.orderInfo,
          selectedDateOut: action.payload,
        },
      };
    case 'SELECTED_ROOMTYPE':
      return {
        orderInfo: {
          ...state.orderInfo,
          roomType: action.payload,
        },
      };
    case 'SELECTED_ADULT_NUMBER':
      return {
        orderInfo: {
          ...state.orderInfo,
          adultNumber: action.payload,
        },
      };
    case 'SELECTED_CHILDREN_NUMBER':
      return {
        orderInfo: {
          ...state.orderInfo,
          childrenNumber: action.payload,
        },
      };
    case 'SELECTED_BABY_NUMBER':
      return {
        orderInfo: {
          ...state.orderInfo,
          babynNumber: action.payload,
        },
      };
    case 'SELECTED_ROOM_NUMBER':
      return {
        orderInfo: {
          ...state.orderInfo,
          roomNumber: action.payload,
        },
      };
    case 'SELECTED_FOODTYPE':
      return {
        orderInfo: {
          ...state.orderInfo,
          foodType: action.payload,
        },
      };
    default:
      return state;
  }
};

export default orderReducer;

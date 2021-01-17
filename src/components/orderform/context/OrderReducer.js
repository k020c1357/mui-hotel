const orderReducer = (state, action) => {
  switch (action.type) {
    case 'SELECTED_DATE_IN':
      return {
        ...state,
        selectedDateIn: action.payload,
      };
    case 'SELECTED_DATE_OUT':
      return {
        ...state,
        selectedDateOut: action.payload,
      };
    case 'SELECTED_ROOMTYPE':
      return {
        ...state,
        roomType: action.payload,
      };
    case 'SELECTED_ADULT_NUMBER':
      return {
        ...state,
        adultNumber: action.payload,
      };
    case 'SELECTED_CHILDREN_NUMBER':
      return {
        ...state,
        childrenNumber: action.payload,
      };
    case 'SELECTED_BABY_NUMBER':
      return {
        ...state,
        babynNumber: action.payload,
      };
    case 'SELECTED_ROOM_NUMBER':
      return {
        ...state,
        roomNumber: action.payload,
      };
    case 'SELECTED_FOODTYPE':
      return {
        ...state,
        foodType: action.payload,
      };
    default:
      return state;
  }
};

export default orderReducer;

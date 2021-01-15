const orderReducer = (state, action) => {
  switch (action.type) {
    case 'SELECTED_DATE_IN':
      return {
        ...state,
        selectedDateIn: action.selectedDateIn,
      };
    case 'SELECTED_DATE_OUT':
      return {
        ...state,
        selectedDateOut: action.selectedDateOut,
      };
    case 'SELECTED_ROOMTYPE':
      return {
        ...state,
        roomType: action.roomType,
      };
    case 'SELECTED_ADULT_NUMBER':
      return {
        ...state,
        adultNumber: action.adultNumber,
      };
    case 'SELECTED_CHILDREN_NUMBER':
      return {
        ...state,
        childrenNumber: action.childrenNumber,
      };
    case 'SELECTED_BABY_NUMBER':
      return {
        ...state,
        babynNumber: action.babyNumber,
      };
    case 'SELECTED_ROOM_NUMBER':
      return {
        ...state,
        roomNumber: action.roomNumber,
      };
    case 'SELECTED_FOODTYPE':
      return {
        ...state,
        foodType: action.foodType,
      };
    default:
      return state;
  }
};

export default orderReducer;

export default orderReducer = (state, action) => {
  switch (action.type) {
    case 'SELECT_DATE':
      return {
        ...state,
      };
    case 'SELECT_ROOMTYPE':
      return {
        ...state,
      };
    case 'SELECT_PERSON_NUMBER':
      return {
        ...state,
      };
    case 'SELECT_ROOM_NUMBER':
      return {
        ...state,
      };
    case 'SELECT_FOODTYPE':
      return {
        ...state,
      };
    default:
      return state;
  }
};

const initialState = {
  item: null
}

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MY_CITY_WEATHER':
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}

export default weatherReducer;
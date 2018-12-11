const initialState = {
  item: null
}

const otherCityReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_OTHER_CITY_WEATHER':
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}

export default otherCityReducer;
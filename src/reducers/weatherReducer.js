const initialState = {
	weatherItem: { current: { condition: {} } }
}


const weatherReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_MY_CITY_WEATHER':
			return {
				...state,
				weatherItem: action.payload
			};
		default:
			return state;
	}
}

export default weatherReducer;
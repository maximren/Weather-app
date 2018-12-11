export const getWeather = () => dispatch => {
	fetch("https://api.apixu.com/v1/forecast.json?key=c8e426cbb3864931b2b112415181112&q=Lviv")
		.then(result => result.json())
		.then(weather => dispatch({
			type: 'GET_MY_CITY_WEATHER',
			payload: weather
		})
		);
}
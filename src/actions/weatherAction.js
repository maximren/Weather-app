import getCityName from '../helpers/getCityName';
import { googleMapsApiKey, weatherApiKey } from '../helpers/config';



export const getWeather = () => dispatch => {
	navigator.geolocation.getCurrentPosition((data) => {
		fetch('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + data.coords.latitude + ',' + data.coords.longitude + '&sensor=true&key=' + googleMapsApiKey + '&language=en')
			.then(result => result.json())
			.then(data => {
				fetch(`https://api.apixu.com/v1/forecast.json?key=` + weatherApiKey + `&q=${getCityName(data.results)}`)
					.then(result => result.json())
					.then(weather => dispatch({
						type: 'GET_MY_CITY_WEATHER',
						payload: weather
					})
					);
			}).catch(err => console.log(err))
	});
}

export const getOtherWeather = (city) => dispatch => {
	fetch(`https://api.apixu.com/v1/forecast.json?key=` + weatherApiKey + `&q=${city}`)
		.then(result => result.json())
		.then(weather => dispatch({
			type: 'GET_OTHER_CITY_WEATHER',
			payload: weather
		}))
		.catch(err => console.log(err));
}


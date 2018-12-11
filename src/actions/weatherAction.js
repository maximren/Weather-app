import getCityName from '../helpers/getCityName';
import { googleMapsApiKey, weatherApiKey, weatherApi } from '../helpers/config';



export const getWeather = () => dispatch => {
	navigator.geolocation.getCurrentPosition((data) => {
		fetch('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + data.coords.latitude + ',' + data.coords.longitude + '&sensor=true&key=' + googleMapsApiKey + '&language=en')
			.then(result => result.json())
			.then(data => {
				fetch(`${weatherApi}${weatherApiKey}&q=${getCityName(data.results)}`)
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
	fetch(`${weatherApi}${weatherApiKey}&q=${city}`)
		.then(result => result.json())
		.then(otherWeather => { console.log(otherWeather);
			dispatch({
				type: 'GET_OTHER_CITY_WEATHER',
				payload: otherWeather
			})
		})
		.catch(err => console.log(err));
}


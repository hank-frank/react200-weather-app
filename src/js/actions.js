import axios from 'axios';

export const UPDATES_SEARCH_VALUE = 'UPDATES_SEARCH_VALUE';
export const GET_WEATHER_INFO = 'GET_WEATHER_INFO';

export function updateSearchValue (value) {
    return {
        type: UPDATES_SEARCH_VALUE,
        payload: { value }
    };
}

export function searchWeather () {
    return {
        type: GET_WEATHER_INFO,
        payload: axios.get(`/weather`)
            .then(response => {
            return { data: response.data };
        })
            .catch(err => {
                return { data: {error: err.toString() } };
            })
    };
}
//leaving off here... figure out the axios call... 

// export function fetchWeatherData(city) {
//     return {
//       type: FETCHES_WEATHER_DATA,
//       payload: axios.get(`/weather/?city=${city}`)
//         .then(response => {
//           return { data: response.data };
//         })
//         .catch(err => {
//           return { data: { error: err.toString() } };
//         })
//     };
//   }

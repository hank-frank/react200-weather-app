import axios from 'axios';

export const UPDATES_SEARCH_VALUE = 'UPDATES_SEARCH_VALUE';
export const GET_WEATHER_INFO = 'GET_WEATHER_INFO';
export const UPDATES_SEARCH_HISTORY = 'UPDATES_SEARCH_HISTORY';


export function updateSearchValue (value) {
    return {
        type: UPDATES_SEARCH_VALUE,
        payload: { value }
    };
}

export function searchWeather (city) {
    return {
        type: GET_WEATHER_INFO,
        payload: axios.get(`/weather/?city=${city}`)
      .then(response => {
        return { data: response.data };
      })
      .catch(err => {
        return { data: { error: err.toString() } };
      })
  };
}

export function updateSearchHistory(city) {
    return {
      type: UPDATES_SEARCH_HISTORY,
      payload: {
        search: {
          city,
          time: new Date()
        }
      }
    };
  }


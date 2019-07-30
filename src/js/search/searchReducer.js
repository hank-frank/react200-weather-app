//replace with correct reducer, just here to not blow up npmstart
const initialState = {
    searchValue: '',
    weatherData: {}
  };

export default function searchReducer (state = initialState, action) {
    const { type, payload } = action;


    switch (type) {
        //case of update description
       

        default: {
            return state;
        }
    }

};

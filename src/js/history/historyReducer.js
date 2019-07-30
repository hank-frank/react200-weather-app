const initialState = {
    searchHistory: []
};

export default function historyReducer (state = initialState, action) {
    const { type, payload } = action;


    switch (type) {
        //case of update description
        

        default: {
            return state;
        }
    }

};

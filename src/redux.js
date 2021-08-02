import {combineReducers, createStore} from 'redux';


//types.js
const SHOW_POPUP = 'SHOW_POPUP';
const ADD_RESOURCE = 'ADD_RESOURCE';

//actions.js


export const showPopup = () => (
    {
        type: SHOW_POPUP
    }
)
export const addResource = () => (
    {
        type: ADD_RESOURCE
    }
)


//reducers.js

const popupInitialState = {
    popup: false
}

const resourceInitialState = {
    resource: {}
}

export const popupReducer = (state = popupInitialState,action) => {

    switch(action.type)
    {
        case SHOW_POPUP:
            return {
                ...state,
                popup: true
            }
        default:
            return state;    
    }
}


export const resourceReducer = (state = resourceInitialState,action) => {

    switch(action.type)
    {
        case ADD_RESOURCE:
            return {
                ...state,
                resource: action.resource
            }
        default:
            return state;    
    }
}




export const reducers = combineReducers({
    popupReducer, resourceReducer
});

//store.js

export function configureStore(initialState = {}) {
    const store = createStore(reducers, initialState);
    return store;
  };
  
  export const store = configureStore();
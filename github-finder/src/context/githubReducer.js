import {
    SEARCH_USERS,
    GET_USER,
    CLEAR_USERS,
    SET_LOADING
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case CLEAR_USERS:
            return {
                ...state,
                users: []
            }
        case  SEARCH_USERS:
            return {
                ...state,
                users: action.payload,
                isLoading: false
            }
        case GET_USER:
            return  {
                ...state,
                user:action.payload,
                isLoading: false
            }
    }
}
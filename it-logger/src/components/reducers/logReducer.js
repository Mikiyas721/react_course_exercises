import {
    GET_LOGS,
    SET_LOADING,
    LOGS_ERROR, ADD_LOG, DELETE_LOG, SET_CURRENT, CLEAR_CURRENT, UPDATE_LOG
} from '../events/types';

const initialState = {
    logs: [],
    current: null,
    isLoading: false,
    error: null
}
export default (state = initialState, event) => {
    switch (event.type) {
        case SET_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case GET_LOGS:
            return {
                ...state,
                logs: event.payload,
                isLoading: true
            }
        case LOGS_ERROR:
            return {
                ...state,
                error: event.payload
            }
        case ADD_LOG:
            return {
                ...state,
                logs: [...state.logs, event.payload],
                isLoading: true
            }
        case DELETE_LOG:
            return {
                ...state,
                logs: state.logs.filter(log => log.id !== event.payload),
                isLoading: true
            }
        case SET_CURRENT:
            console.log(event.payload)
            return {
                ...state,
                current: event.payload
            }
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            }
        case UPDATE_LOG:
            return {
                ...state,
                logs: state.logs.map(log => log.id !== event.payload.id ? event.payload : log),
                isLoading: true
            }
        default:
            return state;
    }
}
import {
    GET_LOGS,
    SET_LOADING,
    LOGS_ERROR,
    ADD_LOG, DELETE_LOG, SET_CURRENT, CLEAR_CURRENT, UPDATE_LOG
} from './types';

export const getLogs = () => {
    return async (dispatch) => {
        try {
            setLoading();
            const rawData = await fetch('/logs');
            const response = await rawData.json();
            dispatch({
                type: GET_LOGS,
                payload: response
            });
        } catch (e) {
            dispatch({
                type: LOGS_ERROR,
                payload: e.response.data
            });
        }

    }
}

export const addLog = (log) => {
    return async (dispatch) => {
        try {
            setLoading();
            const rawData = await fetch('/logs', {
                method: 'POST',
                body: JSON.stringify(log),
                headers: {'Content-Type': 'application/json'}
            });
            const response = await rawData.json();
            dispatch({
                type: ADD_LOG,
                payload: response
            });
        } catch (e) {
            dispatch({
                type: LOGS_ERROR,
                payload: e.response.data
            });
        }

    }
}

export const deleteLog = (id) => {
    return async (dispatch) => {
        try {
            setLoading();
            await fetch(`/logs/${id}`, {
                method: 'DELETE',
            });
            dispatch({
                type: DELETE_LOG,
                payload: id
            });
        } catch (e) {
            dispatch({
                type: LOGS_ERROR,
                payload: e.response.data
            });
        }

    }
}
export const updateLog = (log) => {
    return async (dispatch) => {
        try {
            setLoading();
            const rawData = await fetch(`/logs/${log.id}`, {
                method: 'PUT',
                body:JSON.stringify(log),
                headers:{
                    'Content-Type':'application/json'
                }
            });
            const response = await rawData.json();
            dispatch({
                type: UPDATE_LOG,
                payload: response
            });
        } catch (e) {
            dispatch({
                type: LOGS_ERROR,
                payload: e.response.data
            });
        }

    }
}

export const setCurrent = (log) => {
    return {
        type: SET_CURRENT,
        payload: log
    };
}

export const clearCurrent = () => {
    return {
        type: CLEAR_CURRENT
    };
}

export const setLoading = () => {
    return {
        type: SET_LOADING
    };
}
import React, {useReducer} from 'react';
import axios from "axios";
import GithubContext from "./githubContext";
import githubReducer from "./githubReducer";
import {
    SEARCH_USERS,
    GET_USER,
    CLEAR_USERS,
    SET_LOADING
} from '../types';

const GithubState = (props) => {
    const initialState = {
        user: {},
        users: [],
        isLoading: false,
    };

    const [state, dispatch] = useReducer(githubReducer, initialState);

    const searchUsers = async (text) => {
        if (text !== '') {
            setIsLoading();
            const response = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
            dispatch({
                type: SEARCH_USERS,
                payload: response.data.items
            });
        }
    }
    const getUser = async (username) => {
        setIsLoading();
        const response = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        dispatch({type: GET_USER, payload: response.data});
    }

    const clearUsers = () =>
        dispatch({type: CLEAR_USERS});

    const setIsLoading = () => dispatch({type: SET_LOADING});

    return <GithubContext.Provider value={{
        user: state.user,
        users: state.users,
        isLoading: state.isLoading,
        searchUsers,
        clearUsers,
        getUser
    }}>
        {props.children}
    </GithubContext.Provider>

};
export default GithubState;







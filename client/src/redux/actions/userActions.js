import { ADD_USER, GET_USERS } from "../types";
import axios from "axios";

export const addUser = (user) => {
    return {
        type: ADD_USER,
        payload: user,
    };
};

export const getUsers = (users) => {
    return {
        type: GET_USERS,
        payload: users,
    };
};

export const saveUser = (url, user) => {
    return (dispatch) => {
        axios.post(url, user).then(({ data }) => dispatch(addUser(data)));
    };
};

export const getApiUsers = (url) => {
    return (dispatch) => {
        axios.get(url).then(({ data }) => dispatch(getUsers(data)));
    };
};

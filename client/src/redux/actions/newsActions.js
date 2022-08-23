import { ADD_NEWS, GET_NEWS, UPDATE_NEWS } from "../types";
import axios from "axios";

export const addNews = (news) => {
    return {
        type: ADD_NEWS,
        payload: news,
    };
};

export const getNews = (news) => {
    return {
        type: GET_NEWS,
        payload: news,
    };
};

export const updateNews = (news) => {
    return {
        type: UPDATE_NEWS,
        payload: news,
    };
};

export const saveNews = (url, news) => {
    return (dispatch) => {
        axios.post(url, news).then(({ data }) => dispatch(addNews(data)));
    };
};

export const getApiNews = (url) => {
    return (dispatch) => {
        axios.get(url).then(({ data }) => dispatch(getNews(data)));
    };
};

export const updateApiNews = (url, data) => {
    return (dispatch) => {
        axios.put(url, data).then(({ data }) => dispatch(getNews(data)));
    };
};

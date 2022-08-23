import { ADD_NEWS, GET_NEWS } from "../types";

const initialState = {
    news: [],
};

const newsReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_NEWS: {
            return { ...state, news: [payload, ...state.news] };
        }
        case GET_NEWS: {
            return { ...state, news: payload.reverse() };
        }
        default: {
            return state;
        }
    }
};

export const newsSelector = (state) => state.newsReducer.news;

export default newsReducer;

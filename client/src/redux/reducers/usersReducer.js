import { ADD_USER, GET_USERS } from "../types";

const initialState = {
    users: [],
};

const usersReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_USER: {
            return { ...state, users: [payload, ...state.users] };
        }
        case GET_USERS: {
            return { ...state, users: payload.reverse() };
        }
        default: {
            return state;
        }
    }
};

export const usersSelector = (state) => state.usersReducer.users;

export default usersReducer;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";

import classes from "./Users.module.scss";
import { getApiUsers } from "../../../redux/actions/userActions";
import { usersSelector } from "../../../redux/reducers/usersReducer";
import UserItem from "./UserItem";

const Users = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getApiUsers("http://localhost:5000/users"));
    }, []);

    const users = useSelector(usersSelector);

    return (
        <div className={classes.users}>
            <main className="main">
                <div className={classes.users__wrapper}>
                    <div className="container">
                        <div className={classes.news__body}>
                            <div className={classes.usersList}>
                                <div className={classes.usersList}>
                                    {users.length ? (
                                        users.map((user) => {
                                            return <UserItem data={user} key={v4()} />;
                                        })
                                    ) : (
                                        <div className={classes.warning}>There are no users...</div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Users;

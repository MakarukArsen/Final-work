import React from "react";
import classes from "./Users.module.scss";

const UserItem = ({ data }) => {
    const { name, nickname, imageUrl } = data;

    return (
        <div className={classes.userItem}>
            <div className={classes.user__image}>
                <img src={`${imageUrl}`} alt="image" />
            </div>
            <div className={classes.user__info}>
                <div className={classes.name}>{name}</div>
                <div className={classes.nickname}>@{nickname}</div>
            </div>
        </div>
    );
};

export default UserItem;

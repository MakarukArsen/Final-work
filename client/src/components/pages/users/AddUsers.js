import React, { useState } from "react";
import { v4 } from "uuid";
import { useDispatch } from "react-redux";

import classes from "./Users.module.scss";
import { saveUser } from "../../../redux/actions/userActions";

const AddUsers = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [nickname, setNickname] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const id = v4();

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            id,
            name,
            nickname,
            imageUrl,
        };

        dispatch(saveUser("http://localhost:5000/users", user));
        setName("");
        setNickname("");
        setImageUrl("");
    };

    return (
        <div className={classes.addUsers}>
            <div className="container">
                <form className={classes.addUsers__form}>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className={classes.form__input}
                        type="text"></input>
                    <input
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                        placeholder="Your nickname"
                        className={classes.form__input}
                        type="text"></input>
                    <input
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        placeholder="Your image"
                        className={classes.form__input}
                        type="text"></input>
                    <button onClick={handleSubmit} className={classes.form__submitBtn}>
                        Submit!
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddUsers;

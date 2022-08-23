import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { format } from "date-fns";

import { saveNews } from "../../../redux/actions/newsActions";
import classes from "./News.module.scss";

const AddNews = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const date = format(new Date(), "k:m dd/MM/yyy");

    const handleSubmit = (e) => {
        e.preventDefault();
        const news = {
            date,
            title,
            text,
            imageUrl,
        };
        dispatch(saveNews("http://localhost:5000/news", news));
        setTitle("");
        setText("");
        setImageUrl("");
    };

    return (
        <div className={classes.addNews}>
            <main className="main">
                <div className="container">
                    <form className={classes.addNews__form}>
                        <input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Title"
                            className={classes.form__input}
                            type="text"></input>
                        <input
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder="Text"
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
            </main>
        </div>
    );
};

export default AddNews;

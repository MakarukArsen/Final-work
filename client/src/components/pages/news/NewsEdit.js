import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { format } from "date-fns";

import classes from "./News.module.scss";
import { getApiNews, updateApiNews } from "../../../redux/actions/newsActions";
import { newsSelector } from "../../../redux/reducers/newsReducer";

const NewsEdit = () => {
    const [newTitle, setNewTitle] = useState("");
    const [newText, setNewText] = useState("");
    const [newImageUrl, setNewImageUrl] = useState("");

    const news = useSelector(newsSelector);
    const { id } = useParams();
    const date = format(new Date(), "k:m dd/MM/yyy");
    const dispatch = useDispatch();
    const specificnews = news?.filter((item) => item._id === id);

    useEffect(() => {
        if (news !== null) {
            setNewTitle(specificnews[0].title);
            setNewText(specificnews[0].text);
            setNewImageUrl(specificnews[0].imageUrl);
        }
    }, [news]);

    useEffect(() => {
        dispatch(getApiNews("http://localhost:5000/news"));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedNews = {
            date,
            id,
            title: newTitle,
            text: newText,
            imageUrl: newImageUrl,
        };

        dispatch(updateApiNews(`http://localhost:5000/news/${id}`, updatedNews));
        setNewTitle("");
        setNewText("");
        setNewImageUrl("");
    };
    return (
        <div className={classes.newsEdit}>
            <div className="container">
                <form className={classes.addNews__form}>
                    <input
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        placeholder="Title"
                        className={classes.form__input}
                        type="text"></input>
                    <input
                        value={newText}
                        onChange={(e) => setNewText(e.target.value)}
                        placeholder="Text"
                        className={classes.form__input}
                        type="text"></input>
                    <input
                        value={newImageUrl}
                        onChange={(e) => setNewImageUrl(e.target.value)}
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

export default NewsEdit;

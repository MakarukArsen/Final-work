import React from "react";
import { Link } from "react-router-dom";

import classes from "./News.module.scss";

const NewsItem = ({ data }) => {
    const { _id, title, text, date, imageUrl } = data;

    return (
        <div className={classes.newsItem}>
            <div className={classes.news__image}>
                <img src={`${imageUrl}`} alt="image" />
            </div>
            <div className={classes.news__info}>
                <Link to={`/news/${_id}`} className={classes.link}>
                    <div className={classes.title}>{title}</div>
                </Link>
                <div className={classes.text}>{text}</div>
                <div className={classes.date}>posted at {date}</div>
            </div>
        </div>
    );
};
export default NewsItem;

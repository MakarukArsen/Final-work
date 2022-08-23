import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";

import classes from "./News.module.scss";
import { getApiNews } from "../../../redux/actions/newsActions";
import { newsSelector } from "../../../redux/reducers/newsReducer";
import NewsItem from "./NewsItem";

const News = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getApiNews("http://localhost:5000/news"));
    }, []);

    const news = useSelector(newsSelector);

    return (
        <div className={classes.news}>
            <main className="main">
                <div className={classes.news__wrapper}>
                    <div className="container">
                        <div className={classes.news__body}>
                            <div className={classes.newsList}>
                                {news.length ? (
                                    news.map((news) => {
                                        return <NewsItem data={news} key={v4()} />;
                                    })
                                ) : (
                                    <div className={classes.warning}>There are no news...</div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default News;

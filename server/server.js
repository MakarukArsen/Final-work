const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const appPort = 5000;
const mongoUrl = "mongodb+srv://admin:12345@cluster0.8y7jxq9.mongodb.net/?retryWrites=true&w=majority";

const app = express();
app.use(bodyParser.json());
app.use(cors());

const corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
};

// Model

const UsersSchema = new mongoose.Schema({
    id: String,
    name: String,
    nickname: String,
    imageUrl: String,
});

const NewsSchema = new mongoose.Schema({
    date: String,
    id: String,
    title: String,
    text: String,
    imageUrl: String,
});

mongoose.model("Users", UsersSchema);
mongoose.model("News", NewsSchema);

const Users = mongoose.model("Users");
const News = mongoose.model("News");

// Controller

const getAllUsers = (req, res) => {
    Users.find()
        .exec()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
};

const createUser = (req, res) => {
    Users.create(req.body)
        .then((createUsers) => res.json(createUsers))
        .catch((err) => res.status(500).json(err));
};

const updateUsers = (req, res) => {
    Users.updateOne({ _id: req.params.id }, { $set: req.body })
        .exec()
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
};

const getAllNews = (req, res) => {
    News.find()
        .exec()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
};

const createNews = (req, res) => {
    News.create(req.body)
        .then((createUsers) => res.json(createUsers))
        .catch((err) => res.status(500).json(err));
};

const updateNews = (req, res) => {
    News.updateOne({ _id: req.params.id }, { $set: req.body })
        .exec()
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
};

// Routes

app.get("/users", cors(corsOptions), getAllUsers);
app.post("/users", cors(corsOptions), createUser);
app.put("/users/:id", cors(corsOptions), updateUsers);

app.get("/news", cors(corsOptions), getAllNews);
app.post("/news", cors(corsOptions), createNews);
app.put("/news/:id", cors(corsOptions), updateNews);

mongoose
    .connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(appPort, () => console.log(`Listening on port ${appPort} ...`)))
    .catch((err) => console.error(`Error connecting to mongo: ${mongoUrl}`, err));

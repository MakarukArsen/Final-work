import { Routes, Route } from "react-router-dom";

import "./styles/style.scss";

import Users from "./components/pages/users/Users";
import AddNews from "./components/pages/news/AddNews";
import AddUsers from "./components/pages/users/AddUsers";
import News from "./components/pages/news/News";
import NewsEdit from "./components/pages/news/NewsEdit";
import Header from "./components/header/Header";

function App() {
    return (
        <div className="app">
            <Header />
            <Routes>
                <Route path="/" element={<Users />}></Route>
                <Route path="/add-users" element={<AddUsers />}></Route>
                <Route path="/news" element={<News />}></Route>
                <Route path="/add-news" element={<AddNews />}></Route>
                <Route path="/news/:id" element={<NewsEdit />}></Route>
            </Routes>
        </div>
    );
}

export default App;

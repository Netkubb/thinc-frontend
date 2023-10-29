import React from "react";
import "./App.css";
import Navbar from "./component/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feed from "./component/feed/feed";
import Upload from "./component/upload/upload";
import Home from "./component/home/home";
import Login from "./component/login/login";
import Register from "./component/register/register";
import Authenticator from "./component/Authenticator";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route path="/" element={<Authenticator />} >
            <Route path="/feed" element={<Feed />} />
            <Route path="/upload" element={<Upload />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

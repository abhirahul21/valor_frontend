import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/login/login";
import Register from "./Pages/register/register";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/" component={Register} /> */}
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;

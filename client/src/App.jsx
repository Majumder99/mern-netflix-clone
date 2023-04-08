import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Player from "./pages/Player";
import TVShows from "./pages/TVShows";
import Movies from "./pages/Movies";
import UserListedMovies from "./pages/UserListedMovies";
import Netflix from "./pages/Netflix";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/player" element={<Player />} />
        <Route path="/tv" element={<TVShows />} />
        <Route path="/movies" element={<Movies />} />
        {/* <Route path="/new" element={<Player />} /> */}
        <Route path="/mylist" element={<UserListedMovies />} />
        <Route path="/" element={<Netflix />} />
      </Routes>
    </>
  );
};

export default App;

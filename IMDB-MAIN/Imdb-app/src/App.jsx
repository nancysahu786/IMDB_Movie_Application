import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Signup from "./components/Signup";
import { BrowserRouter, Routes, Route } from "react-router";
import WatchListPage from "./pages/WatchListPage";

import Login from "./components/Login";
import Header from "./components/Header";
import AuthGuard from "./AuthGuard";
import MovieListPage from "./pages/MovieListPage";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> */}

          <Route
            path="watchlist"
            element={
              <AuthGuard>
                <WatchListPage />
              </AuthGuard>
            }
          />

          <Route
            path="/"
            element={
              <AuthGuard>
                <MovieListPage />
              </AuthGuard>
            }
          />
          <Route
            path="/movieList"
            element={
              <AuthGuard>
                <MovieListPage />
              </AuthGuard>
            }
          />
          <Route path="*" element={<h1>Page not found </h1>} />
        </Routes>
      </BrowserRouter>{" "}
    </>
  );
}

export default App;

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
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="header"
            element={
              <AuthGuard>
                <Header />
              </AuthGuard>
            }
          />
          <Route
            path="watchlist"
            element={
              <AuthGuard>
                <WatchListPage />
              </AuthGuard>
            }
          />
        </Routes>
      </BrowserRouter>{" "}
    </>
  );
}

export default App;

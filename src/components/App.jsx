import React from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from "./Navigation";
import AddPage from "../pages/AddPage";
import MainPage from "../pages/MainPage";
import ArchivedPage from "../pages/ArchivedPage";
import DetailPage from "../pages/DetailPage";

import "../styles/index.css";

function App() {
  return (
    <>
      <header>
        <h1 className="app-title">Personal Notes</h1>
        <div className="header-line"></div>
        <br />
        <Navigation />
      </header>
      <br />
      <br />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/archived" element={<ArchivedPage />} />
          <Route path="/note/:id" element={<DetailPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

import React, { useState, useMemo, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from "./Navigation";
import AddPage from "../pages/AddPage";
import MainPage from "../pages/MainPage";
import ArchivedPage from "../pages/ArchivedPage";
import DetailPage from "../pages/DetailPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

import "../styles/index.css";
import { LocaleContext, ThemeContext } from "../contexts";
import { getUserLogged, putAccessToken } from "../utils/api";

function App() {
  const [locale, setLocale] = useState(() => localStorage.getItem("locale") || "id");
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(false);

  const toggleLocale = () => {
    setLocale((prevLocale) => {
      return prevLocale === "id" ? "en" : "id";
    });
  };

  const localeContextValue = useMemo(() => {
    // menyimpan nilai tema baru ke local storage
    localStorage.setItem("locale", locale);
    return {
      locale,
      toggleLocale,
    };
  }, [locale]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      return prevTheme === "light" ? "dark" : "light";
    });
  };

  const themeContextValue = useMemo(() => {
    // menyimpan nilai tema baru ke local storage
    localStorage.setItem("theme", theme);
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);

  // Mount userLogged()
  useEffect(() => {
    (async () => {
      const { data } = await getUserLogged();
      setAuthedUser(data);
      setInitializing(false);
    })();
  }, []);

  // update theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  async function onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
  }

  const onLogout = () => {
    setAuthedUser(null);
    putAccessToken("");
  };

  if (initializing) {
    return null;
  }

  if (authedUser === null) {
    return (
      <LocaleContext.Provider value={localeContextValue}>
        <ThemeContext.Provider value={themeContextValue}>
          <header className="contact-app__header">
            <h1 className="app-title">
              {locale === "id" ? "Catatan Pribadi" : "Personal Notes"}
            </h1>
            <div className="header-line"></div>
          </header>
          <br />
          <br />
          <main>
            <Routes>
              <Route
                path="/*"
                element={<LoginPage loginSuccess={onLoginSuccess} />}
              />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </main>
        </ThemeContext.Provider>
      </LocaleContext.Provider>
    );
  }

  return (
    <>
      <LocaleContext.Provider value={localeContextValue}>
        <ThemeContext.Provider value={themeContextValue}>
          <header>
            <h1 className="app-title">
              {locale === "id" ? "Catatan Pribadi" : "Personal Notes"}
            </h1>
            <div className="header-line"></div>
            <br />
            <Navigation logout={onLogout} name={authedUser.name} />
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
        </ThemeContext.Provider>
      </LocaleContext.Provider>
    </>
  );
}

export default App;

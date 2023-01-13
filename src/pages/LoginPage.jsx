import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { login } from "../utils/api";
import LoginInput from "../components/LoginInput";
import { LocaleContext } from "../contexts";

import "../styles/index.css";

function LoginPage({ loginSuccess }) {
  const { locale } = useContext(LocaleContext);

  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  }

  return (
    <section className="login-page">
      <h2>
        {locale === "id"
          ? "Silakan masuk untuk melanjutkan ..."
          : "Login to continue ..."}
      </h2>
      <LoginInput login={onLogin} />
      <p>
        {locale === "id" ? "Belum punya akun? " : "Don't have an account? "}
        <Link to="/register">
          {locale === "id" ? "Daftar di sini." : "Register here."}
        </Link>
      </p>
    </section>
  );
}

export default LoginPage;

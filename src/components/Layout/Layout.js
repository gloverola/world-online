import { useState, useEffect } from "react";
import Head from "next/head";
import styles from "./Layout.module.css";
import Link from "next/link";
import { Brightness6Rounded } from "@material-ui/icons";

const Layout = ({ children, title = "World Online" }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      localStorage.getItem("theme")
    );

    setTheme(localStorage.getItem("theme"));
  }, []);

  const switchTheme = () => {
    if (theme === "light") {
      saveTheme("dark");
    } else {
      saveTheme("light");
    }
  };

  const saveTheme = (theme) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
      </Head>

      <header className={styles.header}>
        <Link href='/'>
          <span className={styles.logo}>worldOnline.</span>
        </Link>

        <button className={styles.themeSwitcher} onClick={switchTheme}>
          <Brightness6Rounded />
        </button>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        Glover, {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default Layout;

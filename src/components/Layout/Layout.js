import Head from "next/head";
import styles from "./Layout.module.css";

const Layout = ({ children, title = "World Online" }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
      </Head>

      <header className={styles.header}>
        <span>LOGO.</span>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        Glover @ {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default Layout;

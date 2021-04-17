import Head from "next/head";
import styles from "./Layout.module.css";
import Link from "next/link";

const Layout = ({ children, title = "World Online" }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
      </Head>

      <header className={styles.header}>
        <Link href='/'>
          <span className={styles.logo}>LOGO.</span>
        </Link>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        Glover @ {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default Layout;

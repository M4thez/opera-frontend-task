import styles from "./errorPage.module.css";

export default function ErrorPage({ message = "Unknown" }) {
  return (
    <div className={styles.main}>
      <h1 className={styles.text}>Error loading the website: {message}</h1>
    </div>
  );
}

import styles from "./index.module.css";

export function Container({ children, customClass, customClass2 }) {
  return (
    <div
      className={`${styles.containerPattern} ${styles[customClass]} ${styles[customClass2]}`}
    >
      {children}
    </div>
  );
}

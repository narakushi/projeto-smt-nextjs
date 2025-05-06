import Link from "next/link";
import styles from "./index.module.css";

export function Button({
  text,
  customClass,
  event,
  icon,
  to,
  target,
  customClass2,
  type,
}) {
  return to ? (
    <Link
      href={to}
      target={target}
      className={`${styles.btnStyle} ${styles[customClass]} ${styles[customClass2]}`}
      onClick={event && event}
      role="button"
    >
      <span>{text}</span>
      {icon && icon}
    </Link>
  ) : (
    <button
      className={`${styles.btnStyle} ${styles[customClass]} ${styles[customClass2]}`}
      onClick={event && event}
      type={type && type}
    >
      <span>{text}</span>
      {icon && icon}
    </button>
  );
}

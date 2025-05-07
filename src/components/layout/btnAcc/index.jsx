//BtnAcc = Botao de acessibilidade
import Link from "next/link";
import styles from "./index.module.css";
import Image from "next/image";

export function BtnAcc({ icon, src, event, title, to, target }) {
  return to ? (
    <Link
      title={title}
      className={styles.btnStyle}
      onClick={event}
      role="button"
      href={to}
      target={target}
    >
      {src && <Image src={src} alt="Ícone do E-Sic" />}
      {icon && <>{icon}</>}
    </Link>
  ) : (
    <button
      title={title}
      className={`${styles.btnStyle} btnAccClass`}
      onClick={event}
    >
      {src && <img src={src} alt="Ícone do E-Sic" />}
      {icon && <>{icon}</>}
    </button>
  );
}

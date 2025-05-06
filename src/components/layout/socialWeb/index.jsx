import styles from "./index.module.css";
import Button from "@/components/layout/button";
import iconsData from "./iconsData.json";
import Link from "next/link";

export function SocialWeb({ text, type, customClass, to }) {
  return (
    <div className={`${styles.iconsTextsSocial} ${styles[customClass]}`}>
      <span>Dúvidas? Entre em contato conosco!</span>
      <div className={styles.iconsSocial}>
        {iconsData.map((icon, index) => (
          <Link key={index} href={icon.to} target={icon.target}>
            {type === 1 ? (
              <img src={icon.src} alt={icon.alt} />
            ) : (
              <img src={icon.src2} alt={icon.alt} />
            )}
          </Link>
        ))}
      </div>
      {to && (
        <Button
          text={text}
          customClass="btnBorderRadiusSocial"
          to={to}
        ></Button>
      )}
    </div>
  );
}

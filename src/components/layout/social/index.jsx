import styles from "./index.module.css";
import Button from "../button";
import Link from "next/link";
import Image from "next/image";
import iconFace from "@/../public/face-icon-color.svg";
import iconInsta from "@/../public/insta-icon-color.svg";
import iconWpp from "@/../public/whatsapp-icon-color.svg";

export function Social({ text, customClass, href }) {
  return (
    <div className={`${styles.iconsTextsSocial} ${styles[customClass]}`}>
      <div className={styles.iconsSocial}>
        <Link
          href="https://www.facebook.com/SMTTALAGOINHAS/?locale=pt_BR"
          target="_blank"
        >
          <Image priority src={iconFace} alt="Ícone do Facebook em cor azul" />
        </Link>
        <Link href="https://www.instagram.com/smtalagoinhas/" target="_blank">
          <Image
            priority
            src={iconInsta}
            alt="Ícone do Instagram em cores rosa e laranja em radial gradiente"
          />
        </Link>
        <Link
          href="https://api.whatsapp.com/send/?phone=75999997536&text&type=phone_number&app_absent=0"
          target="_blank"
        >
          <Image priority src={iconWpp} alt="ícone do WhatsApp" />
        </Link>
      </div>
    </div>
  );
}

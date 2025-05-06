import Link from "next/link";
import { Container } from "../container";
import styles from "./index.module.css";
import logo from "@/components/img/logo-smt-sem-fundo.webp";
import Image from "next/image";
import welcomeMasc from "@/components/img/welcome-masc.webp";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <Container customClass="alignItems">
        <div className={styles.logoContainer}>
          <Link href="/">
            <Image src={logo} alt="Logo da SMT" />
          </Link>
        </div>
        <div className={styles.weatherContainer}>
          <div className={styles.wheatherIcon}>
            <Image src={welcomeMasc} alt="Icone do tempo" />
          </div>
          <span>20 C, 06/05/2025</span>
        </div>
      </Container>
    </header>
  );
}

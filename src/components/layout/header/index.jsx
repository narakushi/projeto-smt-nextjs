import Link from "next/link";
import { Container } from "../container";
import styles from "./index.module.css";
import logo from "@/../public/logo-smt.webp";
import Image from "next/image";
import { Button } from "../button";
import { Accessibility } from "../accessibility";
import dataTopMenu from "@/../public/globals/dataTopMenu.json";
import { Social } from "../social";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerTopNavBar}>
        <div className={styles.topNavBarContent}>
          <Accessibility />
          <ul className={styles.topNavBarItems}>
            {dataTopMenu.map((item) => (
              <Link
                href={item.url}
                key={item.description}
                title={item.description}
              >
                <li>{item.description}</li>
              </Link>
            ))}
          </ul>
          <Social />
        </div>
      </div>
      <Container customClass="alignItems">
        <div className={styles.logoContainer}>
          <Link href="/">
            <Image src={logo} alt="Logo da SMT" />
          </Link>
        </div>
        <div className={styles.btnsJoin}>
          <Button customClass="btnColor" text="cidadão e empresa"></Button>
          <Button customClass="btnBorder" text="servidor"></Button>
        </div>
      </Container>
    </header>
  );
}

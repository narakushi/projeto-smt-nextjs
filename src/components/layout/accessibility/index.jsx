import styles from "./index.module.css";
import { BtnAcc } from "../btnAcc";
import { FaAccessibleIcon, FaSitemap, FaAdjust } from "react-icons/fa";
import Esic from "@/../public/e-sic.svg";

export function Accessibility() {
  const tags = ["h1", "h2", "h3", "p", "span", "a", "th", "td", "label", "li"];

  return (
    <div className={styles.btnAccessibillity}>
      <BtnAcc title="Aumentar fonte" icon={"A+"} />
      <BtnAcc title="Diminuir fonte" icon={"A-"} />
      <BtnAcc title="Fonte padrão" icon={"A"} />
      <BtnAcc title="Contraste" icon={<FaAdjust />} />
      <BtnAcc title="Mapa do site" icon={<FaSitemap />} to="/sitemap" />
      <BtnAcc
        title="Área de acessibilidade"
        icon={<FaAccessibleIcon />}
        to="/acessibilidade"
      />
      <BtnAcc
        title="Sistema Eletrônico do Serviço de Informações ao Cidadão"
        src={Esic}
        to="https://smttalagoinhas.ba.gov.br/esic"
        target="_blank"
      />
    </div>
  );
}

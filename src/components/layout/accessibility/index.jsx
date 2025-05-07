import styles from "./index.module.css";
import { BtnAcc } from "../btnAcc";
import { FaAccessibleIcon, FaSitemap, FaAdjust } from "react-icons/fa";
import Esic from "@/../public/e-sic.svg";
import { mapFontsPage } from "@/utils/mapFontsPage";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { handleClickAcessibility } from "@/utils/handleClickAcessibility";
import { usePathname } from "next/navigation";
import { updateSizes } from "@/utils/updateSizes";
import { changeContrast } from "@/utils/changeContrast";

export function Accessibility() {
  const tags = ["h1", "h2", "h3", "p", "span", "a", "th", "td", "label", "li"];
  const pathname = usePathname();
  const [contrast, setContrast] = useState(false);

  useEffect(() => {
    if (!Cookies.get("originalSize")) {
      mapFontsPage(tags, Cookies);
    }
  }, [mapFontsPage]);

  useEffect(() => {
    updateSizes(tags, Cookies, "", contrast, setContrast);
  }, [pathname]);

  return (
    <div className={styles.btnAccessibillity}>
      <BtnAcc
        title="Aumentar fonte"
        icon={"A+"}
        event={() =>
          handleClickAcessibility(
            tags,
            "aumentar",
            Cookies,
            contrast,
            setContrast
          )
        }
      />
      <BtnAcc
        title="Diminuir fonte"
        icon={"A-"}
        event={() =>
          handleClickAcessibility(
            tags,
            "diminuir",
            Cookies,
            contrast,
            setContrast
          )
        }
      />
      <BtnAcc
        title="Fonte padrão"
        icon={"A"}
        event={() =>
          handleClickAcessibility(
            tags,
            "normalizar",
            Cookies,
            contrast,
            setContrast
          )
        }
      />
      <BtnAcc
        title="Contraste"
        icon={<FaAdjust />}
        event={() => changeContrast(Cookies, contrast, setContrast)}
      />
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

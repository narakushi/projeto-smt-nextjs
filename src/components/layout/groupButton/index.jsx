import styles from "./index.module.css";
import Dropdown from "../Dropdown";
import Button from "../Button";
import useQueryGeneral from "../../hooks/useQueryGeneral";
import GET_CIDADAO_EMPRESA_MENU from "../../graphql/queries/getCidadaoEmpresa";
import fetchDataGraphQL from "../../services/fetchDataGraphQL";
import GET_SERVIDOR_MENU from "../../graphql/queries/getServidorMenu";

const GroupButton = () => {
  const { data } = useQueryGeneral(
    ["menuCidadaoEmpresa"],
    () => fetchDataGraphQL(GET_CIDADAO_EMPRESA_MENU),
    { staleTime: 1000 * 60 * 60 * 24, refetchOnWindowFocus: false }
  );

  const { data: dataServidor } = useQueryGeneral(
    ["menuServidor"],
    () => fetchDataGraphQL(GET_SERVIDOR_MENU),
    { staleTime: 1000 * 60 * 60 * 24, refetchOnWindowFocus: false }
  );

  const dataRefactor = data?.cidadaoEmpresaMenu.data.attributes.menu;
  const dataMenuServidor = dataServidor?.servidorMenu.data.attributes.menu;

  return (
    <div className={styles.buttonHeaderContainer}>
      <div className={styles.containerButton}>
        <Button text="cidadão & empresa" customClass="btnColor" />
        <div className={styles.buttonDropDown1}>
          <Dropdown
            array={dataRefactor}
            type={1}
            classCustom="dropdownAnimate"
          />
        </div>
      </div>

      <div className={styles.containerButton2}>
        <Button text="servidor" customClass="btnBorder" />
        <div className={styles.buttonDropDown2}>
          <Dropdown
            array={dataMenuServidor} //passando o ultimo item do array dentro de um array
            type={1}
            classCustom="dropdownAnimate"
            classCustomMargin="dropdownContainerTam"
          />
        </div>
      </div>
    </div>
  );
};

export default GroupButton;

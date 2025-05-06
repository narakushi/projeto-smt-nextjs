import ChangeContrast from "../ChangeContrast";
import handleClickAcessibility from "../HandleClickAcessibility";

const HandleKeyDown = (event, tags, Cookies, contrast, setContrast) => {
  if (event.altKey && event.key === "1") {
    handleClickAcessibility(tags, "aumentar", Cookies, contrast, setContrast);
  } else if (event.altKey && event.key === "2") {
    handleClickAcessibility(tags, "diminuir", Cookies, contrast, setContrast);
  } else if (event.altKey && event.key === "3") {
    handleClickAcessibility(tags, "normalizar", Cookies, contrast, setContrast);
  } else if (event.altKey && event.key === "4") {
    ChangeContrast(Cookies, contrast, setContrast);
  } else if (event.altKey && event.key === "5") {
    window.location.replace("/siteMap");
  } else if (event.altKey && event.key === "6") {
    window.location.replace("/acessibilidade");
  } else if (event.altKey && event.key === "7") {
    window.open("https://smttalagoinhas.ba.gov.br/esic", "_blank");
  }
};

export default HandleKeyDown;

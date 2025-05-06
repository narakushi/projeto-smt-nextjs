import SaveContrast from "../SaveContrast";

//Reponsável por alterar o contraste
const ChangeContrast = (Cookies, contrast, setContrast) => {
  const root = document.querySelector("#root");
  if (!contrast) {
    root.classList.add("contrast");
    setContrast(true);
  } else {
    root.classList.remove("contrast");
    setContrast(false);
  }
  //Salva o contraste nos Cookies
  if(Cookies.get("choiceCookie")){
    if(JSON.parse(Cookies.get("choiceCookie"))){
      SaveContrast(Cookies, "contrast", !contrast, 1);
    }
  }

};

export default ChangeContrast;

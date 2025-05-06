import SaveFontsAcc from "../SaveFontsAcc";
import UpdateSizes from "../UpdateSizes";
import VerifySizeFont from "../VerifySizeFont";

//ACIONA AÇÕES ATRAVÉS DOS CLICKS

const handleClickAcessibility = (
  tags,
  action,
  Cookies,
  contrast,
  setContrast
) => {
  const currentSize = {};

  tags.forEach((tag) => {
    const selectors = document.querySelectorAll(tag);
    currentSize[tag] = [];

    for (let selector of selectors) {
      let size = getComputedStyle(selector)
        .getPropertyValue("font-size")
        .replace("px", "");
      size = parseInt(size);

      if (action === "aumentar") {
        size = VerifySizeFont(size, action, tag);
      } else if (action === "diminuir") {
        size = VerifySizeFont(size, action, tag);
      }

      selector.style.fontSize = `${size}px`;
      currentSize[tag].push(size);
    }

    if (action === "normalizar") {
      const originalSize = JSON.parse(Cookies.get("originalSize"));
      if (Cookies.get("choiceCookie")) {
        if (JSON.parse(Cookies.get("choiceCookie"))) {
          SaveFontsAcc(Cookies, "currentSize", originalSize, 1);
        }
      }
      UpdateSizes(tags, Cookies, action, contrast, setContrast);
    }
  });

  if (action != "normalizar") {
    if (Cookies.get("choiceCookie")) {
      if (JSON.parse(Cookies.get("choiceCookie"))) {
        SaveFontsAcc(Cookies, "currentSize", currentSize, 1);
      }
    }
  }
};

export default handleClickAcessibility;

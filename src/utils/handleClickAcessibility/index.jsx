import { saveFontsAcc } from "../saveFontsAcc";
import { updateSizes } from "../updateSizes";
import { verifySizeFont } from "../verifySizeFont";

//ACIONA AÇÕES ATRAVÉS DOS CLICKS

export function handleClickAcessibility(
  tags,
  action,
  Cookies,
  contrast,
  setContrast
) {
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
        size = verifySizeFont(size, action, tag);
      } else if (action === "diminuir") {
        size = verifySizeFont(size, action, tag);
      }

      selector.style.fontSize = `${size}px`;
      currentSize[tag].push(size);
    }

    if (action === "normalizar") {
      const originalSize = JSON.parse(Cookies.get("originalSize"));
      if (Cookies.get("choiceCookie")) {
        if (JSON.parse(Cookies.get("choiceCookie"))) {
          saveFontsAcc(Cookies, "currentSize", originalSize, 7);
        }
      }
      updateSizes(tags, Cookies, action, contrast, setContrast);
    }
  });

  if (action != "normalizar") {
    if (Cookies.get("choiceCookie")) {
      if (JSON.parse(Cookies.get("choiceCookie"))) {
        saveFontsAcc(Cookies, "currentSize", currentSize, 1);
      }
    }
  }
}

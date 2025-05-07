import { saveFontsAcc } from "../saveFontsAcc";

//Coleta os dados iniciais da página e salva os cookies
export function mapFontsPage(tags, Cookies) {
  const originalSize = {};
  tags.forEach((tag) => {
    const selectors = document.querySelectorAll(tag);
    originalSize[tag] = [];
    selectors.forEach((selector) => {
      let size = getComputedStyle(selector).getPropertyValue("font-size");
      size = size.replace("px", "");
      originalSize[tag].push(parseInt(size));
    });
  });
  console.log(originalSize);
  saveFontsAcc(Cookies, "originalSize", originalSize, 1);
  saveFontsAcc(Cookies, "currentSize", originalSize, 1);
}

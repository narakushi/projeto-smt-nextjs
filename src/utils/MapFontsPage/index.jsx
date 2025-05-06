import SaveFontsAcc from "../SaveFontsAcc";

  //Coleta os dados iniciais da página e salva os cookies
const MapFontsPage = (tags, Cookies) => {
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
  SaveFontsAcc(Cookies, "originalSize", originalSize, 1);
  SaveFontsAcc(Cookies, "currentSize", originalSize, 1);
};

export default MapFontsPage;

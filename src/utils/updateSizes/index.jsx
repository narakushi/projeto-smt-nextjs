//Atualiza os tamanho ao carregar/recarregar a página

export function updateSizes(tags, Cookies, action, contrast, setContrast) {
  let originalSize;
  if (Cookies.get("originalSize")) {
    originalSize = JSON.parse(
      Cookies.get(action !== "normalizar" ? "currentSize" : "originalSize")
    );
  }

  tags.forEach((tag) => {
    const selectors = document.querySelectorAll(tag);
    for (let i = 0; i < selectors.length; i++) {
      selectors[i].style.fontSize = `${originalSize[tag][i]}px`;
    }
  });

  if (Cookies.get("contrast")) {
    const contrast = JSON.parse(Cookies.get("contrast"));
    if (contrast) {
      const root = document.querySelector("#root");
      root.classList.add("contrast");
      setContrast(true);
    }
  }
}

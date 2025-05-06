//Controla limites de tamanhos das tags na página

const tagsMaxMin = {
  h1: { min: 20, max: 28 },
  h2: { min: 19, max: 25 },
  h3: { min: 12, max: 20 },
  p: { min: 12, max: 18 },
  span: { min: 12, max: 18 },
  a: { min: 12, max: 18 },
  th: { min: 12, max: 18 },
  td: { min: 12, max: 18 },
  label: { min: 12, max: 18 },
  li: { min: 12, max: 18 },
};

const VerifySizeFont = (size, action, tag) => {
  const { min, max } = tagsMaxMin[tag] || { min: size, max: size };

  if (action === "aumentar") {
    size = size < max ? ++size : size;
  } else if (action === "diminuir") {
    size = size > min ? --size : size;
  }
  return size;
};

export default VerifySizeFont;

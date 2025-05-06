const DetermineTarget = (guiaAlvo) => {
  return guiaAlvo.includes("self") ? "_self" : "_blank";
};

export default DetermineTarget;

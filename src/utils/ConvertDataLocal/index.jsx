const convertDataLocal = (data) => {
  const dataBr = new Date(data);

  return dataBr.toLocaleString();
};

export default convertDataLocal;

const VerifyUrl = (array) => {
  const newArray = array?.map((item) => ({
    ...item,
    url: item.documento?.data != null ? null : item.url 
  }
));

  return newArray;
};

export default VerifyUrl;

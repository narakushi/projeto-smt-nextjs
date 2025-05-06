const VerifyCaracters = (content, LIMIT) => {
    const aboveLimit = content.length > LIMIT;
    const addDotsOrEmpty = aboveLimit ? "..." : "";

    return content.substring(0, LIMIT) + addDotsOrEmpty;
  }

  export default VerifyCaracters;

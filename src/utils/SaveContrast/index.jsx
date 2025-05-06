const SaveContrast = (Cookies, key, value, valueExpires) => {
    Cookies.set(key, value, {expires: valueExpires});
}

export default SaveContrast;
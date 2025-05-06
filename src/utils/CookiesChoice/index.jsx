const CookiesChoice = (Cookies, choice, valueExpires) => {
    Cookies.set("choiceCookie", choice, {expires: valueExpires});
};

export default CookiesChoice;

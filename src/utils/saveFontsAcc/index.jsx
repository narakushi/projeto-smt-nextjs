export function SaveFontsAcc(Cookies, key, value, valueExpires) {
  Cookies.set(key, JSON.stringify(value), { expires: valueExpires });
}

export function saveFontsAcc(Cookies, key, value, valueExpires) {
  Cookies.set(key, JSON.stringify(value), { expires: valueExpires });
}

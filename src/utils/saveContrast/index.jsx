export function saveContrast(Cookies, key, value, valueExpires) {
  Cookies.set(key, value, { expires: valueExpires });
}

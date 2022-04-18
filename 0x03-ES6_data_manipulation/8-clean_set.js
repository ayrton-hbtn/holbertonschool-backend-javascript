export default function cleanSet(set, startString) {
  let returnStr = '';
  for (const str of set) {
    if (str.startsWith(startString) && startString.length > 0) {
      returnStr += `${str.slice(startString.length)}-`;
    }
  }
  return returnStr.slice(0, returnStr.length - 1);
}

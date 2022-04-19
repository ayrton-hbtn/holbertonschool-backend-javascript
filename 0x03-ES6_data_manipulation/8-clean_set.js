export default function cleanSet(set, startString) {
  if (!(set instanceof Set)) {
    throw new TypeError('set must be of type Set');
  }

  if (typeof (startString) !== 'string') {
    throw new TypeError('startString must be of type String');
  }

  let returnStr = '';

  if (startString.length === 0) {
    return returnStr;
  }

  for (const str of set) {
    if (typeof (str) !== 'string') {
      throw new TypeError('set must contain strings only');
    }

    if (str.startsWith(startString)) {
      returnStr += `${str.slice(startString.length)}-`;
    }
  }

  return returnStr.slice(0, returnStr.length - 1);
}

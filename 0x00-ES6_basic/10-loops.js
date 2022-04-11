export default function appendToEachArrayValue (array, appendString) {
  for (let str of array) {
    const idx = array.indexOf(str);
    str = appendString + str;
    array[idx] = str;
  }

  return array;
}

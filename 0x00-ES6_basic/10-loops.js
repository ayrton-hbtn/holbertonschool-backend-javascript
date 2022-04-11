export default function appendToEachArrayValue(array, appendString) {
    for (let str of array) {
        let idx = array.indexOf(str);
        str = appendString + str;
        array[idx] = str;
    }

    return array;
}
export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 1);
  } else {
    const queries = weakMap.get(endpoint);
    weakMap.set(endpoint, queries + 1);
    if (queries >= 5) {
      throw new Error('Endpoint load is high');
    }
  }
  return weakMap;
}

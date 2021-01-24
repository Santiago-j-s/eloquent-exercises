/**
 * @param {number} start
 * @param {number} end
 * @param {number} step
 *
 * @returns {number[]}
 */
export function range(start, end, step = null) {
  if (step === null) {
    step = end > start ? 1 : -1;
  }

  const arr = [];
  let val = start;

  while (true) {
    arr.push(val);
    val += step;

    if (step > 0 && val > end) {
      break;
    }

    if (step < 0 && val < end) {
      break;
    }
  }

  return arr;
}

/**
 * @param {number[]} arr
 */
export function sum(arr) {
  let result = 0;

  arr.forEach((value) => {
    result += value;
  });

  return result;
}

/**
 * @param {Array} arr
 * @returns {Array}
 */
export function reverseArray(arr) {
  const retval = [];
  const arr2 = [...arr];

  while (arr2.length > 0) {
    retval.push(arr2.pop());
  }

  return retval;
}

/**
 * @param {Array} arr
 */
export function reverseArrayInPlace(arr) {
  const size = arr.length;

  const swap = (arr, i, j) => {
    [arr[j], arr[i]] = [arr[i], arr[j]];
  };

  for (let i = 0; i < Math.floor(size / 2); i++) {
    swap(arr, i, size - 1 - i);
  }
}

/**
 * @param {Array} arr
 */
export function arrayToList(arr) {
  if (arr.length === 0) {
    return null;
  }

  let list = null;
  let lastNode = null;

  arr.forEach((value) => {
    const node = { value: value, rest: null };

    if (list === null) {
      list = node;
    } else {
      lastNode.rest = node;
    }

    lastNode = node;
  });

  return list;
}

/**
 * @param {object} list
 */
export function listToArray(list) {
  const arr = [];

  let node = list;
  while (node !== null) {
    arr.push(node.value);
    node = node.rest;
  }

  return arr;
}

/**
 * @param {object} list
 * @param {any} value
 */
export function prepend(list, value) {
  if (list === null) return { value: value, rest: null };
  return { value: value, rest: list };
}

/**
 * @param {object} list
 * @param {number} i
 */
export function nth(list, i) {
  if (list === null) return undefined;
  if (i === 0) return list.value;

  return nth(list.rest, i - 1);
}

/**
 * @param {any} o1
 * @param {any} o2
 * @returns {boolean}
 */
export function deepEqual(o1, o2) {
  const isObject = (o) => typeof o === "object" && o !== null;

  if (!isObject(o1) || !isObject(o2)) {
    return o1 === o2;
  }

  const keys1 = Object.keys(o1);
  const keys2 = Object.keys(o2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const prop in o1) {
    if (!deepEqual(o1[prop], o2[prop])) {
      return false;
    }
  }

  return true;
}

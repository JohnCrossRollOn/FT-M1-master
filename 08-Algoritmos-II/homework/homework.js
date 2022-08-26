'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  if(array.length < 1) return array;
  let p = array[0];
  let l = [];
  let r = [];
  let e = [];
  function _quick(array, c) {
	if (c > array.length-1) {return undefined};
  if (array[c] < p) {l = [...l, array[c]]}
  else if (array[c] > p) {r = [...r, array[c]]}
  else {e = [...e, array[c]]};
  return _quick(array, c+1)
  }
  _quick(array, 0);
	return [...quickSort(l), ...e, ...quickSort(r)]
  }

  function mergeSort(array) {
    if (array.length < 2) {return array}
    var mid = Math.floor(array.length/2);
    var array1 = mergeSort(array.slice(0,mid));
    var array2 = mergeSort(array.slice(mid));
    return merge(array1, array2);
  }
  
  function merge(array1, array2) {
    var sortedArray = [];
    order(array1, array2, sortedArray)
    return sortedArray = [...sortedArray, ...array1.length>0?array1:array2]}
  
  function order(array1, array2, sortedArray) {
    if (array1.length > 0 && array2.length > 0) {
      sortedArray.push(array1[0] < array2[0]? array1.shift() : array2.shift());
      return order(array1, array2, sortedArray)
      }
  }

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};

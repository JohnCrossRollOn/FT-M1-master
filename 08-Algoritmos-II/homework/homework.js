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
    var mid = Math.floor(array.length / 2);
    var left = mergeSort(array.slice(0, mid));
    var right = mergeSort(array.slice(mid));
    return merge(left, right);
    }
    function merge (sublist1, sublist2) {
    var resultList = [];
    while (sublist1.length > 0 && sublist2.length > 0)
    resultList.push(sublist1[0] < sublist2[0]? sublist1.shift() : sublist2.shift());
    return resultList = [...resultList, ...sublist1.length?sublist1 : sublist2]
    }

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};

'use strict'
// No cambies los nombres de las funciones.

function factorear(num, primo) {
  function isPrime(n, c){
      if (!c) {var c = n-1};
      return typeof n!='number'?false:n<1?false:c<2?true:n%c==0?false:isPrime(n, c-1)
    }
  function getPrime(prm, num) {
    if (!num) {var num = 1};
    return isPrime(num)?prm<1?num:getPrime(prm-1, num+1):getPrime(prm, num+1)
  } 

  if (!primo) {var primo = 0}
  return num == 1 && primo == 0?[1]:num<=1?[]:primo == 0?[1, ...factorear(num, primo=1)]:num%getPrime(primo) == 0?[getPrime(primo), ...factorear((num/getPrime(primo)), primo)]:[...factorear(num, primo+1)]
}

function bubbleSort(array) {
  function _bubbleSorter(arr, c) {
    if (!c) {var c = 0}
    if (typeof arr[c+1] == 'number' && arr[c]>=arr[c+1] ) {
      let swap = {a: arr[c], b: arr[c+1]};
      arr[c] = swap.b;
      arr[c+1] = swap.a;}
    return typeof arr[c+1] != 'number'?[arr[c]]:[arr[c], ..._bubbleSorter(arr, c+1)]
  }
  function _bubbleChecker(arr, validity, c) {
    if (!validity) {var validity = true}
    if (!c) {var c = 0}
    return typeof arr[c+1] != 'number'?validity:arr[c]<=arr[c+1]?_bubbleChecker(arr, validity, c+1):false
  }
  _bubbleSorter(array);
  return _bubbleChecker(array)?array:bubbleSort(array)
}



function insertionSort(array, array2) {
	function swap(array, n) {
    if (n === undefined) {return undefined};
    if (typeof array[n-1] !== 'number') {
      return array[n]
    }
    if (array[n] < array[n-1]) {
      var swap = {a: array[n-1], b:array[n]};
      array[n-1] = swap.b;
      array[n] = swap.a;
      return array;
    }
  }
  function compareKey(array, c) {
    if (!c && typeof c != 'number') {c = array.length-1}
    if (array[c] > array[c-1] || c < 1) {return array}
    if (array[c] < array[c-1]) {
      swap(array, c)
    }
    return compareKey(array, c-1)
  }
  if (!array2) {var array2 = [array.shift()]}
  compareKey(array2);
  if (array.length>0) {
    array2.push(array.shift())
    return insertionSort(array, array2)
  }
  return array2
}


function selectionSort(array, array2) {
	function getMin(arr, m, c) {
    if (!c && typeof c != 'number') {var c = arr.length-1};
    if (!m && typeof m != 'number') {var m = arr[arr.length-1]};
    if (c < 1 || typeof arr[c-1] != 'number') {return parseInt(arr.splice(arr.indexOf(m), 1))};
    return m <= arr[c-1]?getMin(arr, m, c-1):getMin(arr, arr[c-1], c-1)
	}
  if (!array2) {var array2 = []}
  array2.push(getMin(array));
  return array.length<1?array2:selectionSort(array, array2)
  }


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};

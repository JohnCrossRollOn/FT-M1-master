"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, 
  buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
  this._length = 0;
  this.head = null;
}

function Node(value) {
  this.value = value;
  this.next = null;
}
 
LinkedList.prototype.add = function(value) {
  var newNode = new Node(value);
  var current = this.head;
  if (!this.head) {
    this.head = newNode;
    this._length++;
    return newNode;
  }
  while (current.next) {
    current = current.next
  }
  current.next = newNode;
  this._length++;
  return newNode;
};

LinkedList.prototype.remove = function() {
  var current = this.head;
  if (this._length == 0) {
    return null;
  }
  if (this._length == 1) {
    var removed = this.head.value;
    this._length--;
    this.head = null;
    return removed;
  }
  while (current.next.next) {
    current = current.next;
  }
  this._length--;
  var removed = current.next.value;
  current.next = null;
  return removed;
};

LinkedList.prototype.search = function(look) {
  var current = this.head;
  if(typeof look == 'function') {
    for(let i = 0; i < this._length; i++){
    if (look(current.value)){return current.value}
    current = current.next;
  	}
  }
  for(let i = 0; i < this._length; i++){
    if (current.value == look){return current.value}
    current = current.next
  }
  return null;
};


/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), 
donde guardaremos datos en formato key-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, 
  pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, 
  suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y 
  calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto key valor (como dos parámetros distintos), hashea la key invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una key por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una key por parámetro y consulta si ya hay algo almacenado en la tabla con esa key (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; 
luego, invocando set('instructora', 'Ani'), se almacenará el par key-valor en un bucket específico (determinado al hashear la key)
*/

function HashTable(){
  this.numBuckets = 35;
  this.buckets = [];
}

HashTable.prototype.hash = function(str){
  return [...str].reduce((t,v)=>t+v.charCodeAt(0), 0)%this.numBuckets
}

HashTable.prototype.set = function(key, val) {
  var i = this.hash(key);
  if (!this.buckets[i]) {
    this.buckets[i] = {};
  }
  this.buckets[i][key] = val;
}

HashTable.prototype.get = function(key) {
  return this.buckets[this.hash(key)][key];
}

HashTable.prototype.hasKey = function(key) {
  return this.buckets[this.hash(key)].hasOwnProperty(key)
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};


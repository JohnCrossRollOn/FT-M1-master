;"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/


function BinarySearchTree(value) {
	this.n = 1;
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.size = function() {
  return this.n;
};

BinarySearchTree.prototype.insert = function(value) {
  this.n++;
  if (value < this.value) {return !this.left? this.left = new BinarySearchTree(value) : this.left.insert(value)};
  if (value > this.value) {return !this.right? this.right = new BinarySearchTree(value) : this.right.insert(value)};
};

BinarySearchTree.prototype.contains = function(value) {
  if (value < this.value) {return !this.left? false : this.left.contains(value);};
  if (value > this.value) {return !this.right? false : this.right.contains(value)};
  return true;
};

BinarySearchTree.prototype.depthFirstForEach = function(cb, str) {
  function inOrd(node) {
    node.left && inOrd(node.left);
    cb(node.value);
    node.right && inOrd(node.right);
  }
  function preOrd(node) {
    cb(node.value);
    node.left && preOrd(node.left);
    node.right && preOrd(node.right);
  }
  function posOrd(node) {
    node.left && posOrd(node.left);
    node.right && posOrd(node.right);
    cb(node.value);
  }
  if (str == 'pre-order') {preOrd(this)};
  if (str == 'post-order') {posOrd(this)};
  if (str == 'in-order' || !str) {inOrd(this)};
}

BinarySearchTree.prototype.breadthFirstForEach = function(cb) {
  var queue = [this];
  var node = this;
  while(queue.length > 0){
      node = queue.shift();
      cb(node.value);
      if(node.left) {queue.push(node.left)};
      if(node.right) {queue.push(node.right)};
  }
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};

const { NotImplementedError } = require("../lib");
const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  #root = null;

  root() {
    return this.#root;
  }

  add(data) {
    this.#root = this.#add(this.#root, data);
  }

  find(data) {
    return this.#find(this.#root, data);
  }

  has(data) {
    return this.#has(this.#root, data);
  }

  remove(data) {
    this.#root = this.#remove(this.#root, data);
  }

  min() {
    if (!this.#root) {
      return;
    }

    let node = this.#root;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.#root) {
      return;
    }

    let node = this.#root;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }

  #add(node, data) {
    if (!node) {
      return new Node(data);
    }

    if (node.data === data) {
      return node;
    }

    if (data < node.data) {
      node.left = this.#add(node.left, data);
    } else {
      node.right = this.#add(node.right, data);
    }

    return node;
  }

  #find(node, data) {
    if (!node) {
      return null;
    }

    if (node.data === data) {
      return node;
    }

    return data < node.data
      ? this.#find(node.left, data)
      : this.#find(node.right, data);
  }

  #has(node, data) {
    if (!node) {
      return false;
    }

    if (node.data === data) {
      return true;
    }

    return data < node.data
      ? this.#has(node.left, data)
      : this.#has(node.right, data);
  }

  #remove(node, data) {
    if (!node) {
      return null;
    }

    if (data < node.data) {
      node.left = this.#remove(node.left, data);
      return node;
    }

    if (data > node.data) {
      node.right = this.#remove(node.right, data);
      return node;
    }

    if (!node.left) {
      return node.right;
    }

    if (!node.right) {
      return node.left;
    }

    let minFromRight = node.right;

    while (minFromRight.left) {
      minFromRight = minFromRight.left;
    }

    node.data = minFromRight.data;
    node.right = this.#remove(node.right, minFromRight.data);

    return node;
  }
}

module.exports = {
  BinarySearchTree,
};

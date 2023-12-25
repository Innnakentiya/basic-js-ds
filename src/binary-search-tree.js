const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(data) {
    this.rootNode = new Node(data);
    this.count = 0;
  }

  root() {
    // return this.count === 0 ? null : this.rootNode;
    if (this.count > 0) {
      return this.rootNode;
    } else {
      return null;
    }
  }

  add(data) {
    this.count++;
    let newNode = new Node(data);

    let findProperPlace = (node) => {
      if (data < node.data) {
        if (!node.left) {
          node.left = newNode;
        } else {
          findProperPlace(node.left);
        }
      } else if (data > node.data) {
        if (!node.right) {
          node.right = newNode;
        } else {
          findProperPlace(node.right);
        }
      }
    };
    if (this.count === 1) {
      this.rootNode = newNode;
    } else {
      findProperPlace(this.rootNode);
    }
  }

  has(data) {
    let currentNode = this.rootNode;

    while (currentNode) {
      if (data === currentNode.data) {
        return true;
      }
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  find(data) {
    let currentNode = this.rootNode;

    while (currentNode) {
      if (data === currentNode.data) {
        return currentNode;
      }
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return null;
  }

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    if (!this.rootNode) {
      return null;
    }

    let currentNode = this.rootNode;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }

    return currentNode.data;
  }

  max() {
    if (!this.rootNode) {
      return null;
    }

    let currentNode = this.rootNode;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree,
};

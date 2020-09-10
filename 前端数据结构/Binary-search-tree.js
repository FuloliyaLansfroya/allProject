class Node {
  constructor(element) {
    this.element = element;
    this.prev = null;
    this.next = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  _insertNode(node, newNode) {
    if (newNode.element < node.element) {
      if (node.prev === null) node.prev = newNode;
      else this._insertNode(node.prev, newNode);
    } else {
      if (node.next === null) node.next = newNode;
      else this._insertNode(node.next, newNode);
    }
  }

  // 向树中插入一个节点
  insert(key) {
    let newNode = new Node(key);

    if (this.root === null) this.root = newNode;
    else this._insertNode(this.root, newNode);
  }

  _searchNode(node, key) {
    if (node === null) return null;

    if (key < node.element) return this._searchNode(node.prev, key);
    else if (key > node.element) return this._searchNode(node.next, key);
    else return node;
  }

  // 在树中查找一个节点
  search(key) {
    return this._searchNode(this.root, key);
  }

  // 前序遍历
  _preOrderTraverseNode(node, callback) {
    if (node !== null) {
      callback(node.element);
      this._preOrderTraverseNode(node.prev, callback);
      this._preOrderTraverseNode(node.next, callback);
    }
  }

  // 中序遍历
  _inOrderTraverseNode(node, callback) {
    if (node !== null) {
      this._inOrderTraverseNode(node.prev, callback);
      callback(node.element);
      this._inOrderTraverseNode(node.next, callback);
    }
  }

  // 后续遍历
  _postOrderTraverseNode(node, callback) {
    if (node !== null) {
      this._postOrderTraverseNode(node.prev, callback);
      this._postOrderTraverseNode(node.next, callback);
      callback(node.element);
    }
  }
  // 通过中序遍历方式遍历树中的所有节点
  inOrderTraverse(callback) {
    this._inOrderTraverseNode(this.root, callback);
  }

  // 通过先序遍历方式遍历树中的所有节点
  preOrderTraverse(callback) {
    this._preOrderTraverseNode(this.root, callback);
  }

  // 通过后序遍历方式遍历树中的所有节点
  postOrderTraverse(callback) {
    this._postOrderTraverseNode(this.root, callback);
  }

  _minNode(node) {
    if (node === null) return null;

    while (node && node.prev !== null) {
      node = node.prev;
    }
    return node;
  }

  _maxNode(node) {
    if (node === null) return null;

    while (node && node.next !== null) {
      node = node.next;
    }
    return node;
  }

  // 返回树中的最小节点
  min() {
    return this._minNode(this.root);
  }

  // 返回树中的最大节点
  max() {
    return this._maxNode(this.root);
  }

  _removeNode(node, key) {
    if (node === null) return null;

    if (key < node.element) {
      node.prev = this._removeNode(node.prev, key);
      return node;
    } else if (key > node.element) {
      node.next = this._removeNode(node.next, key);
      return node;
    } else {
      // 第一种情况：一个叶子节点（没有子节点）
      if (node.prev === null && node.next === null) {
        node = null;
        return node;
      }
      // 第二种情况：只包含一个子节点
      if (node.prev === null) {
        node = node.next;
        return node;
      } else if (node.next === null) {
        node = node.prev;
        return node;
      }

      // 第三种情况：有两个子节点
      let aux = _minNode(node.next);
      node.element = aux.element;
      node.next = this._removeNode(node.next, aux.element);
      return node;
    }
  }

  // 从树中移除一个节点
  remove(key) {
    this.root = this._removeNode(this.root, key);
  }
}

class Stack {
  constructor() {
    this.stack = [];
  }
  push(item) {
    this.stack.push(item);
  }
  pop() {
    this.stack.pop();
  }
  peek() {
    return this.stack[this.getCount() - 1];
  }
  getCount() {
    return this.stack.length;
  }
  clear() {
    this.stack = [];
  }
  isEmpty() {
    return this.getCount() === 0;
  }
  getStack() {
    console.log(this.stack);
  }
}

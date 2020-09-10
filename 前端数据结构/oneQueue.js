class Queue {
  constructor() {
    this.queue = [];
  }
  enQueue(item) {
    this.queue.push(item);
  }
  deQueue() {
    return this.queue.shift();
  }
  getHeader() {
    return this.queue[0];
  }
  getLength() {
    return this.queue.length;
  }
  clear() {
    this.queue = [];
  }
  isEmpty() {
    return this.getLength() === 0;
  }
  getQueue() {
    console.log(this.queue);
  }
}

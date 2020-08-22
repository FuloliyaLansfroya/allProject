// class Stack {
//     constructor(){
//         this.stack=[]
//     }
//     push(item){
//         this.stack.push(item);
//     }
//     pop(){
//         this.stack.pop()
//     }
//     peek(){
//         return this.stack(this.getLength()-1);
//     }
//     getLength(){
//         return this.stack.length;
//     }
//     isEmpity(){
//         return this.getLength===0;
//     }
// }

// class Queue{
//     constructor(){
//         this.queue=[]
//     }
//     enQueue(item){
//         this.queue.push(item);
//     }
//     deQueue(){
//         return this.queue.shift();
//     }
//     getHeader(){
//         return this.queue[0]
//     }
//     getLength(){
//         return this.queue.length;
//     }
//     isEmpity(){
//         return this.getLength===0;
//     }
// }

class SqQueue {
  constructor() {
    this.queue = new Array();
    this.first = 0;
    this.last = 0;
    this.size = 0;
  }
  enQueue(item) {
    if (
      this.first === this.last % this.queue.length &&
      this.last >= this.getLength()
    ) {
      this.resize(this.getLength() + 1);
    }
    this.queue[this.last] = item;
    this.size++;
    this.last = this.last + 1;
  }
  deQueue() {
    if (this.isEmpity()) {
      throw Error("queue is empty");
    }
    let r = this.queue[this.first];
    this.queue.shift();
    this.size--;
    return r;
  }
  getHeader() {
    if (this.isEmpity()) {
      throw Error("queue is empty");
    }
    return this.queue[this.first];
  }
  getLength() {
    return this.queue.length;
  }
  isEmpity() {
    return this.first === this.last && this.getLength() === 0;
  }
  resize(length) {
    let q = new Array(length);
    for (let i = 0; i < length; i++) {
      q[i] = this.queue[(i + this.first) % this.getLength()];
    }
    this.queue = q;
    this.first = 0;
    this.last = this.size;
  }
  getSqQueue() {
    console.log(this.queue);
  }
}

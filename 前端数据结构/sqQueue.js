class SqQueue {
  constructor() {
    this.queue = new Array();
    this.first = 0; // 队头
    this.last = 0;  // 队尾
    this.size = 0;  // 实际大小
  }

  enQueue(item) {
    // 每当插入一个数据时，进行判断,如果此时first和last相等且last与队列长度相等时，将队列伸长，保证足够的空间填装数据
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
    // 生成新数组，代替原数组。
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
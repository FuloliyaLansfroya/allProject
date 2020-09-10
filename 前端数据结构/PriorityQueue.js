class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  // 向队列添加元素（一个或多个）
  // 参数obj的数据格式：{element, priority}
  enQueue(obj) {
    if (obj instanceof Array) {
      for (let i = 0, data; (data = obj[i]); i++) {
        this.enQueue(data);
      }
    } else {
      let added = false;
      for (let i = 0, data; (data = this.queue[i]); i++) {
        // 最小优先级，即将priority值小的元素插入到队列的前面
        if (obj.priority < data.priority) {
          this.queue.splice(i, 0, obj);
          added = true;
          break;
        }
      }

      // 如果元素没有插入到队列中，则默认加到队列的尾部
      if (!added) this.queue.push(obj);
    }
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
    this.queue.forEach(function (item) {
      console.log(`${item.element} - ${item.priority}`);
    });
  }
}

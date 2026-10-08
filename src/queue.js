const { NotImplementedError } = require("../lib");
const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  getUnderlyingList() {
    if (!this.head) return null;
    const nodes = [];
    let current = this.head;
    while (current) {
      nodes.push({ value: current.value, next: null });
      current = current.next;
    }
    for (let i = 0; i < nodes.length - 1; i++) {
      nodes[i].next = nodes[i + 1];
    }
    return nodes[0];
  }

  enqueue(value) {
    const node = new ListNode(value);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  dequeue() {
    if (this.length === 0) return undefined;
    const tmp = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return tmp.value;
  }
}

module.exports = {
  Queue,
};

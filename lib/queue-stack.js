class Queue {
    #queue;

    constructor() {
        this.#queue = [];

    }

    enqueue(item) {
        this.#queue.push(item);
    }

    dequeue() {
        return this.#queue.shift();
    }
}

const queue = new Queue;
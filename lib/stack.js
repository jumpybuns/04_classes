class Stack {
    #stack;

    constructor() {
        this.#stack = [];
    }

    push(item) {
        this.#stack.push(item);
    }

    pop() {
        this.#stack = this.#stack.pop();
    }


    peek() {
        return this.#stack[this.#stack.length - 1];
    }
}

module.exports = {
    Stack
};



const { Stack } = require('./lib/stack.js')
const newStack = new Stack();
const regex = /[(){}\[\]]/g;

const characterArray = function (fString) {
    const stringArray = fString.split('');
    const codeString = "const add = (a, b) => { return a + b };";
    const matchyMatchy = codeString.match(regex);
    stringArray.forEach(char => {
        if (char === '{' || '[' || '(') {
            newStack.push(char)
            console.log(newStack.peek())
        }


        else if (char === '}') {
            console.log(newStack.pop())

        }
        return matchyMatchy;
    });
};

characterArray("const add = (a, b) => { return a + b };");

// }
module.exports = {
    // linter,
    characterArray,
};
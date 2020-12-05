const express = require('express');
const { stripInput } = require('./utils.js');
const app = express();
const { Stack } = require('./lib/stack.js');

app.use(express.json());

app.get('/', (req, res) => {
    console.log(req.body);
    res.send('yoyoyo');
})


app.post('/lint', (req, res) => {
    const newStack = new Stack();
    const stringArray = stripInput(req.body.lint);
    let result = true;

    stringArray.forEach(char => {
        if (char === '{' || char === '[' || char === '(') {
            newStack.push(char);
        } else {
            const top = newStack.peek();
            if (top === '{' && char === '}') {
                newStack.pop();
            } else if (top === '[' && char === ']') {
                newStack.pop();
            } else if (top === '(' && char === ')') {
                newStack.pop();
            } else {
                result = `missing ${char}`;
            };
        }
    }
    )
    res.send(result);
})


app.listen(7890, () => {
    console.log('started on 7890')
})




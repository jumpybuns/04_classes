const express = require('express');
const stack = require('./lib/stack.js');
const app = express();
const { Stack } = require('./lib/stack.js');

app.use(express.json());

app.post('/lint', (req, res) => {
    const newStack = new Stack();
    const onlyBrackets = stripInput(req.body.code);

    onlyBrackets.forEach(bracket => {
        if (bracket === '{' || '[' || '(') {
            newStack.push(bracket);
        } else {

        }
    })
    res.send(newStack)
    //logic to check brackets
    // const stuff = (src) => {
    //     Promise.all([newStack.push("{}[]")])
    //         .then(newStack => newStack.pop())
    //         .then(res => res.json())
    //         .then(newStack => newStack.peek());

    // })
});


app.listen(7890, () => {
    console.log('farted on 7890')
})




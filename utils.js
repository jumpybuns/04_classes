function stripInput(input) {
    // console.log(input.match(/[(){}\[\]]/g));
    return input.match(/[(){}\[\]]/g);
}

module.exports = {
    stripInput
}

const regex = /[(){}\[\]]/g;

function stripInput(input) {
    // console.log(input.match(/[(){}\[\]]/g));
    return input.match(regex);
}

module.exports = {
    stripInput
}

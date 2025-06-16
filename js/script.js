'use strict';

function padString(str, length, padChar = ' ', padRight = true) {
    if (typeof str !== 'string') {
        return 'First argument must be a string';
    }

    if (typeof length !== 'number' || length < 0) {
        return 'Second argument must be a non-negative number';
    }

    if (typeof padChar !== 'string' || padChar.length !== 1) {
        return 'Third argument must be a single character string';
    }

    if (str.length >= length) {
        return str.substring(0, length);
    }

    for (let i = str.length; i < length; i++) {
        if (padRight) {
            str += padChar;
        } else {
            str = padChar + str;
        }
    }

    return str;
}

console.log(padString('hello', 8, '*'));

console.log(padString('hello', 6, '*', false));

console.log(padString('hello', 2));
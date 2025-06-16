'use strict';

function generateKey(length, characters) {
    let result = '';
    const charsArray = Array.from(characters);
    const charactersLength = charsArray.length;

    for (let i = 0; i < length; i++) {
        result += charsArray[Math.floor(Math.random() * charactersLength)];
    }

    return result;

}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789😀😃😄😁😆😅🤣😂';
const key = generateKey(16, characters);
console.log(key);
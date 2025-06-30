'use strict';

function myApply(func, context, argsArray) {
  context = context || globalThis;

  const uniqueProp = Symbol();
  context[uniqueProp] = func;

  if (!argsArray || !Array.isArray(argsArray)) {
    argsArray = [];
  }

  const result = context[uniqueProp](...argsArray);

  delete context[uniqueProp];
  return result;
}

function greet(greeting, punctuation) {
  return `${greeting}, ${this.name}${punctuation}`;
}

const person = { name: "Ірина" };
console.log(myApply(greet, person, ["Привіт", "!"]));

function myBind(func, context, ...boundArgs) {
  return function (...args) {
    const uniqueProp = Symbol();
    context[uniqueProp] = func;

    const result = context[uniqueProp](...boundArgs, ...args);

    delete context[uniqueProp];
    return result;
  };
}

function sayHi(greeting) {
  return `${greeting}, ${this.name}`;
}

const user = { name: "Олег" };
const bound = myBind(sayHi, user);
console.log(bound("Привіт"));

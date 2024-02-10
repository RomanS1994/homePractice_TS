/**
  |============================
  | Базові типи
  |============================
*/
// //bolean
// let isDone: boolean = false;
const getUserNames = (users) => {
    return users.map((user) => user.name);
};
const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
];
let result = getUserNames(users);
console.log(result); // ['Alice', 'Bob', 'Charlie']
/************ Function Type ************/
let myFunc;
myFunc = (first, second) => {
    console.log(`First: ${first}, Second: ${second}`);
};
myFunc("Hello", 42); // Висновок: "First: Hello, Second: 42"
/**
  |============================
  | Generics
  |============================
*/
let arr = [];
arr = ["str", 10, true];
export {};

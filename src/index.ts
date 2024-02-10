/**
  |============================
  | Базові типи
  |============================
*/
// //bolean
// let isDone: boolean = false;

// // number
// let decimal: number = 6;

// //string
// let color: string = "blue";

// //nul and undefined

// let empty: null = null;
// let notParam: undefined = undefined;

// // В аргументи функції( тип даних )

// function foo(num: number, str: string, bool: boolean, empty: null) {
//   // logic
// }

//---------------------------------------------
/************ Складні типи ************/

// // Object
// // type User = {
// //   name: string;
// //   age: number;
// // };

// let user: User = {
//   name: "Tom",
//   age: 25,
// };

// let userJack: User = {
//   name: "Jack",
//   age: 25,
// };

// // Array
// type User = {
//   name: string;
//   age: number;
// };

// let users: User[] = [{ name: "Tom", age: 30 }];

/************ Типи для змінних та аргументів ************/

// // Any
// let notShure: any = 4;
// notShure = "sd";
// notShure = false;
// notShure = {};
// notShure = 5;

// let num: number;
// num = notShure;
// // не варто зловживати
// // використовувати тільки коли відсилаємо запити на бекенд (коли не знаємо який тип даних нам приходить)

/************ Unknown ************/
// // схожий на any, але він забезпечує більше безпеки

// let notShures: unknown = 4;
// notShures = "str";
// notShures = false;

// let numb: number;

// // numb = notShures;
// //підходить для сценаріїв, коли ви не знаєте точного типу даних, але все ж таки хочете підтримувати сувору перевірку типів

/************ Enum ************/
// enum Role {
//   ADMIN,
//   USER,
// }

// const person = {
//   role: Role.ADMIN,
// };

// if (person.role === Role.ADMIN) {
//   console.log("Role: ", Role.ADMIN);
// }

// export = {};

/************ const enum ************/
// const enum Day {
//   MONDAY,
//   TUESDAY,
//   WEDNESDAY,
//   THURSDAY,
//   FRIDAY,
//   SATURDAY,
//   SUNDAY,
// }
//---------------------------------------------

// const enum Test {
//   A = 1,
//   B = 2,
// }

// for (let item in Test) {
//   console.log(item);
// }

// export {};

//---------------------------------------------
// const enum HttpCodes {
//   OK = 200,
//   BadRequest = 400,
//   Unauthorized = 401,
// }

// const status = HttpCodes.OK;

/**
  |============================
  | Типи для методів та функцій
  |============================
*/
type User = {
  id: number;
  name: string;
};

const getUserNames = (users: User[]): string[] => {
  return users.map((user) => user.name);
};

const users: User[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

let result = getUserNames(users);
console.log(result); // ['Alice', 'Bob', 'Charlie']

export {};

/************ Function Type ************/
let myFunc: (firstArg: string, secondArg: number) => void;

myFunc = (first, second) => {
  console.log(`First: ${first}, Second: ${second}`);
};

myFunc("Hello", 42); // Висновок: "First: Hello, Second: 42"

export {};

/**
  |============================
  | Generics
  |============================
*/
let arr: Array<string | number> = [];

arr = ["str", 10, true];

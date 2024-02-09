/************ Базові типи ************/
//bolean
let isDone: boolean = false;

// number
let decimal: number = 6;

//string
let color: string = "blue";

//nul and undefined

let empty: null = null;
let notParam: undefined = undefined;

// В аргументи функції( тип даних )

function foo(num: number, str: string, bool: boolean, empty: null) {
  // logic
}

//---------------------------------------------
/************ Складні типи ************/

// Object

type User = {
  name: string;
  age: number;
};

let user: User = {
  name: "Tom",
  age: 25,
};

let userJack: User = {
  name: "Jack",
  age: 25,
};

// Array

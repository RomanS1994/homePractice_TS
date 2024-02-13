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
// type User = {
//   id: number;
//   name: string;
// };

// const getUserNames = (users: User[]): string[] => {
//   return users.map((user) => user.name);
// };

// const users: User[] = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" },
// ];

// let result = getUserNames(users);
// console.log(result); // ['Alice', 'Bob', 'Charlie']

// export {};

// /************ Function Type ************/
// let myFunc: (firstArg: string, secondArg: number) => void;

// myFunc = (first, second) => {
//   console.log(`First: ${first}, Second: ${second}`);
// };

// myFunc("Hello", 42); // Висновок: "First: Hello, Second: 42"

// export {};

// /**
//   |============================
//   | Generics
//   |============================
// */
// let arr: Array<string | number> = [];

// arr = ["str", 10, true];

/**
  |============================
  | 
  |============================
*/

/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<T extends AllType, U extends AllType>(
  top: Pick<T, keyof AllType>,
  bottom: Pick<U, keyof AllType>
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

export {};

/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

export {};

/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface ComponentProps {
  title: string;
}

class Component<T extends ComponentProps> {
  constructor(public props: T) {}
}

class Page extends Component<ComponentProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};

/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

export {};
/*
  Ви маєте форму реєстрації користувачів. 
  Іноді потрібно попередньо заповнити форму даними користувача для оновлення його профілю. 
  Однак вам не завжди потрібно заповнити всі поля. Наприклад, користувач може хотіти оновити лише свій email та пароль, 
  залишивши ім'я та прізвище без змін.

  Виправте тип у аргументі функції так, щоб не було помилок типу.
*/

type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>) {
  // Оновлення користувача
}

createOrUpdateUser({ email: "user@mail.com", password: "password123" });

export {};

/*
  У вас є перелік UserRole, який використовується для класифікації користувачів у вашому додатку.
  Ви хочете створити об'єкт RoleDescription, який зіставлятиме кожну роль користувача з її описом.
*/

export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

// Замініть наступний код на версію за допомогою Record
type RoleDescription = Record<UserRole, string>;

const roleDescription: RoleDescription = {
  [UserRole.admin]: "Admin User",
  [UserRole.editor]: "Editor User",
  [UserRole.guest]: "Guest User",
};

export {};
/*
  У вас є тип Form, який містить інформацію про форму, включаючи поле errors. 
  Ви хочете створити новий тип Params, який включає всі поля з Form, крім errors.
*/

type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

// Реалізуйте Params так, щоб унеможливити поле 'errors' з типу Form
type Params = Omit<Form, "errors">;

export {};

/**
  |============================
  | LSP (Liskov substitution principle) - Принцип заміщення Барбари Лісков
  |============================
*/
abstract class Vehicle {
  abstract startEngine(): void; // запустити двигун
  abstract accelerate(): void; // прискорити
}

class Car extends Vehicle {
  startEngine() {
    // запустити двигун
    this.engageIgnition();
    // console.log("Car engine started");
  }

  accelerate() {
    // console.log("Car is accelerating");
  }

  private engageIgnition() {
    // це включає запалювання ();
    // Ignition procedure
    // console.log("Engaging car ignition");
  }
}

class ElectricBus extends Vehicle {
  startEngine() {
    // console.log("Electric bus engine started");
  }

  accelerate() {
    this.increaseVoltage();
    this.connectIndividualEngines();
    // console.log("Electric bus is accelerating");
  }

  private increaseVoltage() {
    // Electric logic
    // console.log("Increasing electric bus voltage");
  }

  private connectIndividualEngines() {
    // Connection logic
    // console.log("Connecting individual electric bus engines");
  }
}

class Driver {
  go(vehicle: Vehicle) {
    vehicle.startEngine();
    vehicle.accelerate();
  }
}

let car = new Car();
let bus = new ElectricBus();
let driver = new Driver();

driver.go(car); // This should work
driver.go(bus); // This should also work

/**
  |============================
  | Class in TS
  |============================
*/

// class House {
//   add;
//   strit;
//   constructor(n: string, b: string) {
//     this.strit = n;
//     this.add = "111";
//   }
// }

// const house = new House("sds", "123");

const Car = function () {};

const carBmw = new Car();

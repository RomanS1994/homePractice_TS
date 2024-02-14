/**
  |============================
  | Базові типи
  |============================
*/
// //bolean
// let isDone: boolean = false;
function compare(top, bottom) {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
/*
  У вас є функція merge, яка поєднує два об'єкти.
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/
function merge(objA, objB) {
  return Object.assign(objA, objB);
}
class Component {
  constructor(props) {
    this.props = props;
  }
}
class Page extends Component {
  pageInfo() {
    console.log(this.props.title);
  }
}
function createOrUpdateUser(initialValues) {
  // Оновлення користувача
}
createOrUpdateUser({ email: "user@mail.com", password: "password123" });
/*
  У вас є перелік UserRole, який використовується для класифікації користувачів у вашому додатку.
  Ви хочете створити об'єкт RoleDescription, який зіставлятиме кожну роль користувача з її описом.
*/
export var UserRole;
(function (UserRole) {
  UserRole["admin"] = "admin";
  UserRole["editor"] = "editor";
  UserRole["guest"] = "guest";
})(UserRole || (UserRole = {}));
const roleDescription = {
  [UserRole.admin]: "Admin User",
  [UserRole.editor]: "Editor User",
  [UserRole.guest]: "Guest User",
};
/**
  |============================
  | LSP (Liskov substitution principle) - Принцип заміщення Барбари Лісков
  |============================
*/
class Vehicle {}
class Car extends Vehicle {
  startEngine() {
    // запустити двигун
    this.engageIgnition();
    // console.log("Car engine started");
  }
  accelerate() {
    // console.log("Car is accelerating");
  }
  engageIgnition() {
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
  increaseVoltage() {
    // Electric logic
    // console.log("Increasing electric bus voltage");
  }
  connectIndividualEngines() {
    // Connection logic
    // console.log("Connecting individual electric bus engines");
  }
}
class Driver {
  go(vehicle) {
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

import { IPerson, IPilot } from './type';

abstract class Plane {
  protected pilot?: IPilot;

  public sitInPlane(pilot: IPilot): void {
    this.pilot = pilot;
  }

  public abstract startEngine(): boolean;
}

class Boeing extends Plane {
  public startEngine(): boolean {
    if (!this.pilot) {
      throw new Error('No pilot in cabin');
    }
    // Розігріваємо реактивні турбіни.
    console.log('Запуск турбин');

    this.pilot.flyMessage();
    return true;
  }
}

const boeing = new Boeing();
const pilot = new Pilot('Anthony', 32);

// Капітан вітає пасажирів на трапі.
pilot.greet('Вас вітає капітан корабля');

// Займає місце пілота.
boeing.sitInPlane(pilot);

// Запускаємо двигуни.
boeing.startEngine();

export { Boeing };

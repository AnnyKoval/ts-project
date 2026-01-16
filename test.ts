// ***************** enum *********************
// 1. Create an enum called Weekday with values: Monday, Tuesday, Wednesday, Thursday, and Friday.
// Write a function that takes a Weekday as an argument and returns "Weekend" if it's Saturday or Sunday, otherwise "Weekday".

// 1) Weekday enum + function
enum Weekday {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

function dayType(day: Weekday): "Weekend" | "Weekday" {
  return day === Weekday.Saturday || day === Weekday.Sunday ? "Weekend" : "Weekday";
}

// demo
console.log(dayType(Weekday.Monday));   // Weekday
console.log(dayType(Weekday.Sunday));   // Weekend


// 2. Create an enum called OrderStatus with values: Pending, Shipped, Delivered, and Cancelled.
//  Write a function that takes an OrderStatus and logs a message based on the status - "Oreder was delivered", "Order was cancelled", etc.

// 2) OrderStatus enum + logger function
enum OrderStatus {
  Pending = "Pending",
  Shipped = "Shipped",
  Delivered = "Delivered",
  Cancelled = "Cancelled",
}

function logOrderStatus(status: OrderStatus): void {
  switch (status) {
    case OrderStatus.Pending:
      console.log("Order is pending");
      break;
    case OrderStatus.Shipped:
      console.log("Order was shipped");
      break;
    case OrderStatus.Delivered:
      console.log("Order was delivered");
      break;
    case OrderStatus.Cancelled:
      console.log("Order was cancelled");
      break;
    default: {
      // Helps TypeScript ensure we handled all cases if enum changes
      const _exhaustive: never = status;
      console.log(_exhaustive);
    }
  }
}

// demo
logOrderStatus(OrderStatus.Delivered);
logOrderStatus(OrderStatus.Cancelled);


// **************** class inheritance *******************
// 1. Create a Vehicle class with brand and speed properties. 
// Then create a subclass Car that adds a fuelType property. Add a method displayInfo that logs all details.

// 1) Vehicle -> Car
class Vehicle {
  constructor(public brand: string, public speed: number) {}
}

class Car extends Vehicle {
  constructor(brand: string, speed: number, public fuelType: string) {
    super(brand, speed);
  }

  displayInfo(): void {
    console.log(`Brand: ${this.brand}, Speed: ${this.speed} km/h, Fuel: ${this.fuelType}`);
  }
}

// demo
const car1 = new Car("Toyota", 120, "Petrol");
car1.displayInfo();

// 2. Create a class Employee with properties name and salary. Add a method getDetails() that logs the employee's name and salary.
// Create a subclass Manager that adds a department property and overrides getDetails() to include the department. 
// Create class object and print all properties
// 2) Employee -> Manager (override)
class Employee {
  constructor(public name: string, public salary: number) {}

  getDetails(): void {
    console.log(`Name: ${this.name}, Salary: ${this.salary}`);
  }
}

class Manager extends Employee {
  constructor(name: string, salary: number, public department: string) {
    super(name, salary);
  }

  override getDetails(): void {
    console.log(`Name: ${this.name}, Salary: ${this.salary}, Department: ${this.department}`);
  }
}

// demo (create object and print all properties)
const manager1 = new Manager("Anna", 50000, "Engineering");
console.log(manager1.name, manager1.salary, manager1.department);
manager1.getDetails();


// **************** interface implementation *******************
// 1. Define an interface Person with name (string) and age (number) properties.
// Create a class Student that implements Person and adds a grade property. Create class object and print all properties

// 1) Person -> Student
interface Person {
  name: string;
  age: number;
}

class Student implements Person {
  constructor(public name: string, public age: number, public grade: string) {}
}

// demo
const student1 = new Student("Mark", 18, "A");
console.log(student1.name, student1.age, student1.grade);

// 2. Create an interface Shape with a method getArea(). Implement this interface in two classes: Rectangle (with width and height) and Circle (with radius).
// Make getArea() return the correct area for each shape. Create class object and print all properties

// 2) Shape -> Rectangle + Circle
interface Shape {
  getArea(): number;
}

class Rectangle implements Shape {
  constructor(public width: number, public height: number) {}
  getArea(): number {
    return this.width * this.height;
  }
}

class Circle implements Shape {
  constructor(public radius: number) {}
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

// demo
const rect1 = new Rectangle(10, 5);
console.log("Rectangle:", rect1.width, rect1.height, "Area:", rect1.getArea());

const circle1 = new Circle(3);
console.log("Circle:", circle1.radius, "Area:", circle1.getArea());

// 3. Define an interface Playable with a method play().
// Create two classes, Guitar and Piano, that implement Playable and provide their own version of play() that logs a message like "Playing guitar" or "Playing piano".
// Create classes objects and call play()
// 3) Playable -> Guitar + Piano
interface Playable {
  play(): void;
}

class Guitar implements Playable {
  play(): void {
    console.log("Playing guitar");
  }
}

class Piano implements Playable {
  play(): void {
    console.log("Playing piano");
  }
}

// demo
const guitar1 = new Guitar();
const piano1 = new Piano();
guitar1.play();
piano1.play();


// **************** function optional and default parameters **********************
// 1. Write a function greet that takes name (string) and an optional message. 
// If the message is provided, print it with the name. If message is not provided - use "Hello 'name'"

// 1) greet(name, optional message)
function greet(name: string, message?: string): void {
  if (message) {
    console.log(`${message}, ${name}`);
  } else {
    console.log(`Hello ${name}`);
  }
}

// demo
greet("Anna");
greet("Anna", "Good morning");


// 2. Create a function calculatePrice that takes price and an optional discount (default: 0.1).
// The function should return the final price after applying the discount.

// 2) calculatePrice(price, discount default = 0.1)
function calculatePrice(price: number, discount: number = 0.1): number {
  return price * (1 - discount);
}

// demo
console.log(calculatePrice(100));      // 90
console.log(calculatePrice(100, 0.2)); // 80
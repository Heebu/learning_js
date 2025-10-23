# Phase 4: Object-Oriented JavaScript (OOP)

## 🧱 Introduction to OOP in JavaScript

**Object-Oriented Programming (OOP)** is a way of structuring code around objects — things that have **properties** (data) and **methods** (functions).  

In JavaScript, almost everything is an object — arrays, functions, and even other data types can behave like objects.

OOP helps you:
- Organize your code logically.
- Avoid repetition by reusing structures.
- Make your code easier to scale and maintain.

---

## 🧩 Understanding Objects

An **object** groups related data and behavior together.

Example:

```js
const car = {
  brand: "Toyota",
  model: "Corolla",
  start: function () {
    console.log("Car started");
  }
};

console.log(car.brand); // Output: Toyota
car.start(); // Output: Car started
```

Objects can store different kinds of data and define actions they can perform.

---

## 🧬 Constructor Functions

Before classes were introduced, developers used **constructor functions** to create multiple objects of the same type.

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log("Hello, my name is " + this.name);
  };
}

const person1 = new Person("Idris", 22);
person1.greet(); // Output: Hello, my name is Idris
```

The `new` keyword creates a new object based on the constructor’s blueprint.

---

## 🧱 Classes (ES6)

ES6 introduced the `class` syntax, which makes OOP easier to read and write.

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}
```

You can create new objects (instances) from the class:

```js
const user = new Person("Idris", 22);
user.greet(); // Output: Hello, my name is Idris
```

---

## 🧠 Inheritance

**Inheritance** allows one class to use properties and methods of another class — helping you reuse code efficiently.

```js
class Student extends Person {
  constructor(name, age, course) {
    super(name, age);
    this.course = course;
  }

  study() {
    console.log(`${this.name} is studying ${this.course}`);
  }
}

const student = new Student("Idris", 22, "Computer Science");
student.greet(); // From Person
student.study(); // From Student
```

`super()` calls the parent class’s constructor.

---

## 🔒 Encapsulation

Encapsulation means keeping data safe from direct modification.  
In modern JavaScript, you can use **private fields** with `#` to protect properties.

```js
class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}
```

Private properties can’t be accessed directly — only through defined methods.

---

## 🔁 Polymorphism

**Polymorphism** allows different objects to use the same method name but with their own behavior.

```js
class Animal {
  speak() {
    console.log("The animal makes a sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("The dog barks");
  }
}
```

Calling the same `speak()` method produces different outputs depending on the class.

---

## 🧩 Prototypes and the Prototype Chain

Every JavaScript object has a hidden link to another object called its **prototype**.  
This is how inheritance works under the hood.

You can access or modify prototypes directly:

```js
Person.prototype.sayBye = function () {
  console.log(`${this.name} says goodbye`);
};
```

This adds a new method to all `Person` objects, even those created earlier.

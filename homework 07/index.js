class Employee {
  constructor(id, firstName, lastName, positon, salary, workingHours) {
    this._id = id,
      this._firstName = firstName,
      this._lastName = lastName,
      this._position = positon,
      this._salary = salary,
      this._workingHours = workingHours
  }

  get getId() {
    return `ID: ${this._id}`
  }

  set setId(value) {
    if (!+value) {
      throw 'ID should be a number!';
    }
    this._id = +value;
  }

  get getFirstName() {
    return `First Name: ${this._firstName}`
  }

  set setFirstName(value) {
    if (typeof value !== 'string' || value === '' || +value) {
      throw 'First Name should be a string and can\'t be empty!';
    }
    this._firstName = value[0].toUpperCase() + value.slice(1).toLowerCase();
  }

  get getLastName() {
    return `Last Name: ${this._lastName}`
  }

  set setLastName(value) {
    if (typeof value !== 'string' || value === '' || +value) {
      throw 'Last Name should be a string and can\'t be empty!';
    }
    this._lastName = value[0].toUpperCase() + value.slice(1).toLowerCase();
  }

  get getPosition() {
    return `Position: ${this._position}`
  }

  set setPosition(value) {
    if (typeof value !== 'string' || value === '' || +value) {
      throw 'Position should be a string and can\'t be empty!';
    }
    this._position = value[0].toUpperCase() + value.slice(1).toLowerCase();;
  }

  get getSalary() {
    return `Salary: ${this._salary}$`
  }

  set setSalary(value) {
    if (!(+value) || value === 0) {
      throw 'Salary should be a number or can\'t be a zero!';
    }
    this._salary = +value;
  }

  get getWorkingHours() {
    return `Working Hours: ${this._workingHours} hours per week`
  }

  set setWorkingHours(value) {
    if (!+value || value === 0) {
      throw 'Working Hours should be a number or can\'t be a zero!';
    }
    this._workingHours = value;
  }

  getFullName() {
    return `Full Name: ${this._firstName} ${this._lastName}`
  }

  getAnnularSalary() {
    return `Total salary of the employee within a year is ${52 * this._workingHours * this._salary}$`
  }

  raiseSalary(percent) {
    if (percent < 1 || percent > 100) {
      throw 'Percent is out of range!';
    }
    this._salary = +(this._salary * (1 + percent / 100)).toFixed(2);
  }
}

/*-------------------------------------------------------------------------------------------*/

class Author {
  constructor(name, email, gender) {
    this._name = name,
      this._email = email,
      this._gender = gender
  }

  get getName() {
    return `Name: ${this._name}`
  }

  set setName(value) {
    if (typeof value !== 'string' || value === '' || +value) {
      throw 'Name should be a string and can\'t be empty!';
    }
    this._name = value[0].toUpperCase() + value.slice(1).toLowerCase();
  }

  get getEmail() {
    return `Email: ${this._email}`
  }

  set setEmail(value) {
    let check = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!check.test(value)) {
      throw "Email is not valid!"
    }
    this._email = value;
  }

  get getGender() {
    return `Gender: ${this._gender}`
  }

  set setGender(value) {
    if (typeof value !== 'string' || value === '') {
      throw 'Gender should be a string and can\'t be empty!';
    }
    this._gender = value;
  }

  toString() {
    return `{\n name: ${this._name},\n email: ${this._email},\n gender: ${this._gender} \n}`
  }
}

class Book {
  constructor(title, author, price, quantity) {
    this._title = title,
      this._author = author,
      this._price = price,
      this._quantity = quantity
  }

  get getTitle() {
    return `Title" ${this._title}`
  }

  set setTitle(value) {
    if (typeof value !== 'string' || value === '') {
      throw 'The title should be string and can\'t be empty!'
    }
    this._title = value;
  }

  get getAuthor() {
    return `Author: ${this._author}`
  }

  set setAuthor(value) {
    if (!(value instanceof Author)) {
      throw 'Something went wrong!'
    }
    this._author = value;
  }

  get getPrice() {
    return `Price: ${this._price}$`;
  }

  set setPrice(value) {
    if (!+value || value < 0) {
      throw 'Price should be a number and greater than zero!'
    }
    this._price = +value;
  }

  get getQuantity() {
    return `Quantity: ${this._quantity}$`
  }

  set setQuantity(value) {
    if (!+value || value < 0) {
      throw 'Quantity should be a number and greater than zero'
    }
    this._quantity = +value;
  }

  getProfit() {
    return `Profit is ${this._price * this._quantity}$`
  }

  toString() {
    return `{\n title: ${this._title},\n author: ${this._author},\n price: ${this._price}, \n quantity: ${this._quantity} \n}`
  }
}

/*-------------------------------------------------------------------------------------------*/
  
class Account {
  constructor(id, name, balance) {
    this._id = id,
      this._name = name,
      this._balance = balance
  }

  get getId() {
    return `Account ID: ${this._id}`
  }

  get getName() {
    return `Account Name: ${this._name}`
  }

  set setName(value) {
    if (typeof value !== 'string' || value === '') {
      throw 'Name should be a string and can\'t be empty'
    }
    this._name = value;
  }

  get getBalance() {
    return `Account Balance: ${this._balance}$`
  }

  set setBalance(value) {
    if (!+value || value < 0) {
      throw 'Balance should be a number and greater than zero!'
    }
    this._balance = +value;
  }

  credit(amount) {
    if (!+amount || amount < 0) {
      throw 'Amount should be a number and greater than zero!'
    }
    this._balance += +amount;
    console.log(`Account Balance: ${this._balance}$`);
  }

  debit(amount) {
    if (!+amount || amount < 0) {
      throw 'Amount should be a number and greater than zero!'
    }
    if (+amount > this._balance) {
      console.log('Amount exceeded balance.');
      return
    }
    this._balance -= +amount;
    console.log(`Account Balance: ${this._balance}$`);
  }

  transferTo(anotherAccount, amount) {
    if (!(anotherAccount instanceof Account)) {
      throw 'Account is not vlaid!';
    }
    if (!+amount || amount < 0) {
      throw 'Amount should be a number and greater than zero!';
    }
    if (+amount > this._balance) {
      console.log('Amount exceeded balance.');
      return
    }
    this._balance -= +amount;
    anotherAccount._balance += +amount;
    console.log(`Account Balance: ${this._balance}$`);
  }

  static identifyAccounts(firstAccount, secondAccount) {
    if (!(firstAccount instanceof Account) || !(secondAccount instanceof Account)) {
      throw 'Accounts are not vlaid!';
    }
    return Object.keys(firstAccount).every(key => {
      return firstAccount[key] === secondAccount[key];
    });
  }

  toString() {
    return `{\n id: ${this._id},\n name: ${this._name},\n balance: ${this._balance} \n}`
  }
}

/*-------------------------------------------------------------------------------------------*/
    
class Person {
  constructor(firstName, lastName, gender, age) {
    this._firstName = firstName,
      this._lastName = lastName,
      this._gender = gender,
      this._age = age
  }

  get getFirstName() {
    return `First Name: ${this._firstName}`
  }

  set setFirstName(value) {
    if (typeof value !== 'string' || value === '' || +value) {
      throw 'First Name should be a string and can\'t be empty!';
    }
    this._firstName = value[0].toUpperCase() + value.slice(1).toLowerCase();
  }

  get getLastName() {
    return `Last Name: ${this._lastName}`
  }

  set setLastName(value) {
    if (typeof value !== 'string' || value === '' || +value) {
      throw 'Last Name should be a string and can\'t be empty!';
    }
    this._lastName = value[0].toUpperCase() + value.slice(1).toLowerCase();
  }

  get getGender() {
    return `Gender: ${this._gender}`
  }

  set setGender(value) {
    if (typeof value !== 'string' || value === '') {
      throw 'Gender should be a string and can\'t be empty!';
    }
    this._gender = value;
  }

  get getAge() {
    return `${this._firstName} ${this._lastName} is ${this._age} years old`
  }

  set setAge(value) {
    if (!+value || value < 1) {
      throw 'Age isn\'t valid!'
    }
    this._age = +value;
  }

  toString() {
    let context = this;
    return '{' + Object.keys(context).map(function(key) {
      return key + ': ' + context[key];
    }) + '}';
  }
}
  
class Student extends Person {
  constructor(firstName, lastName, gender, age, program, year, fee) {
    super(firstName, lastName, gender, age);
    this._program = program,
      this._year = year,
      this._fee = fee,
      this._grade = this._program.reduce((acc, val) => {
        acc[val] = 0;
        return acc;
      }, {});
  }

  get getProgram() {
    return `Program: ${this._program}`
  }

  set setProgram(value) {
    if (typeof value !== 'string' || value === '') {
      throw 'Program should be a string and can\'t be empty!';
    }
    this._program.push(value)
  }

  get getYear() {
    return `Year: ${this._year}`
  }

  set setYear(value) {
    if (!+value || value < 1) {
      throw 'Age isn\'t valid!'
    }
    this._year = +value;
  }

  get getFee() {
    return `Fee: ${this._fee}$`
  }

  set setFee(value) {
    if (!+value || value < 1) {
      throw 'Age isn\'t valid!'
    }
    this._fee = +value;
  }

  passExam(programm, grade) {
    if (!+grade) {
      throw 'Grade isn\'t valid!'
    }

    let pass = false;

    Object.keys(this._grade).forEach(val => {
      if (val === programm && +grade > 0) {
        this._grade[val] = +grade;
      }
    });

    pass = Object.keys(this._grade).every(val => {
      return this._grade[val] >= 50;
    });

    if (pass) {
      this._year += 1;
    }
  }

  toString() {
    let context = this;
    return '{' + Object.keys(context).map(function(key) {
      return key + ': ' + context[key];
    }) + '}';
  }
}
    
class Teacher extends Person {
  constructor(firstName, lastName, gender, age, program, pay) {
    super(firstName, lastName, gender, age);
    this._program = program,
      this._pay = pay
  }

  get getProgram() {
    return `Program: ${this._program}`
  }

  set setProgram(value) {
    if (typeof value !== 'string' || value === '') {
      throw 'Program should be a string and can\'t be empty!';
    }
    this._program = value;
  }

  get getPay() {
    return `Pay: ${this._pay}$`
  }

  set setPay(value) {
    if (!+value || value < 0) {
      throw 'Pay isn\'t valid!'
    }
    this._pay = +value;
  }

  toString() {
    let context = this;
    return '{' + Object.keys(context).map(function(key) {
      return ' ' + key + ': ' + context[key];
    }) + ' }';
  }
}

/*-------------------------------------------------------------------------------------------*/
    
class Clock {
  constructor({ template }) {
    this._timer,
    this._template = template
  }

  render() {
    let date = new Date();
    let hours = date.getHours();
    if (hours < 0) hours = '0' + hours
    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;
    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;
    let output = this._template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);
    console.log(output);
  }

  stop() {
    clearInterval(this._timer);
  }

  start() {
    this.render();
    this._timer = setInterval(() => {
      this.render()
    }, 1000);
  }
}
  
let clock = new Clock({template: 'h:m:s'});
clock.start();
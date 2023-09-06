// Object, property, and method

// Objects => properties, methods
/*
const person = {
  name: 'Sujan',
  bio: () => {
    return 'Mahat';
  },
};
console.log(person.bio());

const person = (name, add) => {
  return {
    personName: name,
    address: add,
    bio() {
      //   console.log(this, '------');
      return `Hey this person name is ${this.personName} and lives in ${this.address}`;
      // this function chai multiple thau ma use garna ko lagi use garney
    },

    upper() {
      this.personName = this.personName.toUpperCase();
      this.address = this.address.toUpperCase();
    },

    lower() {
      this.personName = this.personName.toLowerCase();
      this.address = this.address.toLowerCase();
    },
  };
};

const p = person('Sujan', 'Sydney');
// console.log(p);
p.upper();
console.log(p.bio());

const p2 = person('Asim', 'Brisbane');
// console.log(p2);
p2.lower();
console.log(p2.bio());
*/

// Class

/*
class Person {
  #secretKey;
  constructor(n, a) {
    this.personName = n;
    this.address = a;
    this.#secretKey = 'Love';
  }
  bio() {
    return `Hey this person name is ${this.personName} and lives in ${
      this.address
    } and the secretKey is ${this.#secretKey}`;
  }

  upper() {
    this.personName = this.personName.toUpperCase();
    this.address = this.address.toUpperCase();
  }

  lower() {
    this.personName = this.personName.toLowerCase();
    this.address = this.address.toLowerCase();
  }
}

const p = new Person('Sujan', 'Sydney');
p.number = '0424249946';
p.upper();
console.log(p);

const p2 = new Person('aa', 'ss');
console.log(p2);

*/

// This keywords
// super

// constructor
// -->  executes very frist

// Encapsulation
// -> have access to but don't know how it works in details

// Abstraction
// -> do not have access outside the class

// Inheritance

/*
class Living {
  constructor(name, dob) {
    this.name = name;
    this.dob = dob;
  }
  boi() {
    return `hi i am ${this.name} and was born in ${this.dob}`;
  }
}

class Human extends Living {
  constructor({ name, dob, pet, age }) {
    super(name, dob);
    this.petName = pet;
  }

  petBio() {
    return `My pet name is ${this.petName} and I love it.`;
  }
}

class Animal extends Living {
  constructor({ name, dob, owner }) {
    super(name, dob);
    this.owner = owner;
  }

  ownerBio() {
    return `My Owner name is ${this.owner} and I love it.`;
  }
}

const person = {
  name: 'Mary',
  dob: '2222',
  pet: 'Yuno',
  age: 9,
};

const pObj = new Human(person);
console.log(pObj.boi(), pObj);
// console.log(pObj.petBio());
// ====

const yu = {
  name: 'Yuno',
  dob: '333',
  owner: 'Alex',
};

const uObj = new Animal(yu);
console.log(uObj.boi());
*/

// polymorphism.
// -> have multiple instances of a one object

//Recursion
/*
let i = 0;
const increase = () => {
  i++;

  const j = i;
  console.log(i, j);

  if (i == 10) {
    return;
  }

  //calling itself
  increase();
};
increase();

*/

const money = [32, 34, 54, 3, 33, 44, 2, 43];

let sum = 0;
const total = (money) => {
  sum += money.pop();
  console.log(sum);
  if (!money.length) {
    return sum;
  }
  return total(money);
};
const ttl = total(money);
console.log(ttl);

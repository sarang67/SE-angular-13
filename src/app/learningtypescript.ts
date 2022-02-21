import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { reduce } from 'rxjs';

export function typescriptSE() {
  //ts code goes there
  console.log('I am working');

  // type --> number , string , boolean , object, array , function

  // syntax --->    varname  : Type = value;

  let myName: string = 'sarang';

  //myName = 1;

  let myAge: number = 31;
  // myAge = 'fourty';

  let hasHobbies: boolean = true;
  // hasHobbies = [];

  let isMarried = true;

  // isMarried = 'sarang';

  let hobbies: string[] = ['singing', 'running'];

  // hobbies = [1, 2, 'sarang'];

  // tuple type

  let address: [string, number, string] = [
    'vinay nagar',
    201,
    'behind jain temple',
  ];

  address = ['102', 454545, 'saa'];

  let container: any = 'sarang';
  container = 1;
  container = {};
  container = [];

  enum Name {
    monu,
    ankesh,
    rohit,
    gaurav = 100,
    sarang,
  }

  console.log(Name.rohit);
  console.log(Name.gaurav);
  console.log(Name.sarang);

  enum Color {
    red,
    white,
    yellow,
  }

  let myColor: Color = Color.red;
  let myColor1: Color = Color.white;
  let myColo21: Color = Color.yellow;

  console.log(myColor, myColor1);

  // function type

  // function return type

  function retName(): string {
    return 'sarang';
  }

  let check = retName();

  function noretName(): void {
    console.log('sarang jain');
  }

  // function argument type

  function add(no1: number, no2: number): void {
    console.log(no1 + no2);
  }

  add(10, 20);

  function multiply(no1: number, no2: number): number {
    return no1 * no2;
  }

  let result: number = multiply(10, 20);

  let mymultply: (no1: number, no2: number) => number;
  let myAdd: (no1: number, no2: number) => number;

  mymultply = function (no1, no2) {
    return no1 * no2;
  };

  myAdd = (no1, no2) => 500;

  console.log(myAdd(10, 20));

  // object type

  let userData: { name: string; age: number; address: string } = {
    name: 'sarang jain',
    age: 30,
    address: 'pune',
  };

  let complex: { data: number[]; output: (p1: number) => number[] };

  complex = {
    data: [1, 2, 3],
    output: function (value) {
      return this.data;
    },
  };

  complex.output(4);

  // type alias

  type myComplexOBj = {
    data: number[];
    output: (p1: number) => number[];
    age: number;
  };

  let complex2: myComplexOBj;
  let complex3: myComplexOBj;
  let complex4: myComplexOBj;
  let complex5: myComplexOBj;

  // uniun type
  let myRealAge: number | string = 'twenty seven';

  myRealAge = 27;
  myRealAge = 'twenty seven';

  // classes and object

  class Person {
    // public name: string = 'sarang'; // access anywhere
    private age: number = 50; // access within the class
    protected address: string = 'vinay nagar gwalior'; // access withinn the class or child class
    //  public familyMember: number;

    // here you are creating and assigning --> familymember
    constructor(
      public pName: string,
      pAge: number,
      public familyMember: number
    ) {
      //this.name = pName;
      this.age = pAge;
      // this.familyMember = familyMember;
    }

    public printAge() {
      console.log(this.age);
    }
  }
  let sarang = new Person('sarang', 30, 10);

  console.log(sarang);
  console.log(sarang.pName);
  //  console.log(sarang.age);

  class Employee extends Person {
    constructor(n: string, a: number, fm: number) {
      super(n, a, fm);
    }
  }

  console.log(new Employee('monu', 60, 40));

  // interface

  interface NameRule {
    name: string;
    age?: number; // optional
    anyFn(fname: string): void;
  }

  const person_1: NameRule = {
    name: 'sarang jain',
    anyFn(name) {},
  };

  const person_2 = {
    name: 'swapnil',
    anyFn(name: string) {},
  };

  const person_3 = {
    name: 'swapnil',
    age: 50,
    anyFn(name: string) {},
  };

  function greetHim(person: NameRule) {
    console.log(`Hello ${person}`);
  }

  greetHim(person_2);
  greetHim(person_3);
  greetHim({ name: 'sarang', age: 50, anyFn(name: string) {} });
  greetHim({ name: 'om', anyFn(name: string) {} });

  class myEmployee implements NameRule {
    name: string = 'sarang';
    anyFn(fname: string) {
      console.log(fname);
    }
  }

  // inheritance of interface
  interface salaryPerson extends NameRule {
    salary: number;
  }

  let seemployee: salaryPerson = {
    salary: 20000,
    name: 'kumar',
    age: 50, // optional
    anyFn(fname: string) {},
  };
  
  /*
interfaces is the contract between object and itself(interface) which define what kind of property will  be define inside the object. property could be  method as well.  if that protocol will not follow it will give error. 
  */

  // ---------------dont go beyond**************************
}

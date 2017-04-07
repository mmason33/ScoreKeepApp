import {Players} from './../imports/api/players';
import {Meteor} from 'meteor/meteor';

Meteor.startup(() => {

//  THESE ARE EXAMPLES FOR MY REFERENCE

  // ============ SPREAD OPERATOR AND OBJECT SHORTHAND =============

  // let house = {//user with spread operator example
  //   bedrooms: 2,
  //   bathrooms: 1.5
  // };
  //
  // let yearBuilt = 1995;// used with shorthand object property
  //
  // let newHouse = {
  //   ...house,// spread operator example
  //   bedrooms: 3,
  //   yearBuilt,//shorthand object property
  //   flooring: 'Carpet'
  // };
  //
  // console.log(newHouse);


  // ============CLASSES===============

  // class Person { // WRITING CLASSES
  //   constructor(name = 'NoName', age = '0'){
  //     this.name = name;
  //     this.age = age;
  //   }
  //   getGreeting() {
  //     return `My name is ${this.name}.`;
  //   }
  //   getPersonDescription() {
  //     return `${this.name} is ${this.age} years old.`;
  //   }
  // }
  //
  // class Employee extends Person { //EXPLORING SUB-CLASSES AND OVERIDING METHODS
  //   constructor(name, age, title) {
  //     super(name, age); // USING super(args) to gain context and use of parent arguments or props
  //     this.title = title;
  //   }
  //   hasJob() {
  //     return !!this.title;
  //   }
  //   getGreeting() {
  //     if (this.title) {
  //       return `My name is ${this.name}. I work as a ${this.title}.`;
  //     } else {
  //       return super.getGreeting();
  //     }
  //   }
  // }
  //
  // class Programmer extends Person {
  //   constructor(name, age, language = 'HTML') {
  //     super(name, age);
  //     this.language = language;
  //   }
  //   getGreeting() {
  //     return `My name is ${this.name} and I am a ${this.language} developer.`
  //   }
  // }
  //
  // let dude = new Programmer('Joe', 32 , 'Javascript'); //wrting the classes to the console
  // console.log(dude.getGreeting());
  //
  // let me = new Employee('Mike', 26, 'db admin');
  // console.log(me.getGreeting());
  //
  // let person = new Employee('Boone');
  // console.log(person.getGreeting());
});

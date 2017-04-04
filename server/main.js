import {Players} from './../imports/api/players';
import {Meteor} from 'meteor/meteor';

Meteor.startup(() => {
  // class Person {
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
  // class Employee extends Person {
  //   constructor(name, age, title) {
  //     super(name, age);
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
  // let dude = new Programmer('Joe', 32 , 'Javascript');
  // console.log(dude.getGreeting());

  // let me = new Employee('Mike', 26, 'db admin');
  // console.log(me.getGreeting());
  //
  // let person = new Employee('Boone');
  // console.log(person.getGreeting());
});

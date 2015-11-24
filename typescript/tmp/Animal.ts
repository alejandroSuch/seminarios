export default class Animal {
  name: string;
  age: number;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  public greet():void {
    var msg:string = `Hello, I'm a ${this.name}`;
    console.log(msg);
  }
}

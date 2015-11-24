export default class Animal {
  name: string;

  constructor(name) {
    this.name = name;
  }

  public greet():void {
    var msg:string = `Hello, I'm a ${this.name}`;
    console.log(msg);
  }
}

export class Hello {
  sayHelloTo(name: string): void {
    console.log("Hello ", name);
  }
}

export interface Person {
  name: string;
  getName(): string;
}

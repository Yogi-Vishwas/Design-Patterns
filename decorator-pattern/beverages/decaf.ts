import { Beverage } from "../interfaces";

export class Decaf implements Beverage {
  description: string;

  constructor() {
    this.description = "Decaf";
  }

  getDescription(): string {
    return this.description;
  }

  cost(): number {
    return 1.05;
  }
}

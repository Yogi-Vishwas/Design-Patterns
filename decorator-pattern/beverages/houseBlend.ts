import { Beverage } from "../interfaces";

export class HouseBlend implements Beverage {
  description: string;

  constructor() {
    this.description = "House Blend";
  }

  getDescription(): string {
    return this.description;
  }

  cost(): number {
    return 0.89;
  }
}

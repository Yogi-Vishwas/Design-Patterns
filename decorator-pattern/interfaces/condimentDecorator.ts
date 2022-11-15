import { Beverage } from "./beverage";

export interface CondimentDecorator extends Beverage {
  getDescription(): string;
}

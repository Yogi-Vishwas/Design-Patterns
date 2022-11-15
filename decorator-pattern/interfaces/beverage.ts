export interface Beverage {
  description: string;

  getDescription(): string;
  cost(): number;
}

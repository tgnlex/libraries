type Add = (a: number, b: number) => number;
const add: Add = (a: number, b: number): number => {
  let c: number;
  c = a + b;
  return c;  
}
type Subtr = (a: number, b: number) => number;
const subtr: Subtr = (a: number, b: number): number => {
  let c: number;
  c = a - b;
  return c;
}
type Multiply = (a: number, b: number) => number;
const multiply: Multiply = (a: number, b: number): number => {
  let c: number;
  c = a * b;
  return c;
};
type Divide = (a: number, b: number) => number;
const divide: Divide = (a: number, b: number): number => {
  let c: number;
  c = a / b;
  return c;
}
type Increment = (int: number) => number;
const increment: Increment = (int: number): number => {
  int = int + 1;
  return int;
}
type Decrement = (int: number) => number;
const decrement: Decrement = (int: number): number => {
  int = int - 1;
  return int;
}
interface MathUtils {
  add: Add;
  subtr: Subtr;
  multiply: Multiply;
  divide: Divide;
  increment: Increment; 
  decrement: Decrement;
}
const math: MathUtils = {
  add, subtr, multiply, divide, increment, decrement
};

export {add, subtr, multiply, divide, increment, decrement};
export default math;
export type { MathUtils };
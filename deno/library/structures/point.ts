interface Coordinates {
  x: number;
  y: number;
}
class Point implements Coordinates {
  x: number;
  y: number;
  constructor(coordinates: Coordinates) {
    this.x = coordinates.x;
    this.y = coordinates.y;
  }
  set = (x: number, y: number) => {
    this.x = x;
    this.y = x;
  }  
  setX = (x: number) => {
    this.x = x;
  };
  setY = (y: number) => {
    this.y = y;
  }

  up = () => {
    this.y = this.y + 1
  };
  right = () => { 
    this.x = this.x - 1
  };
  down = () => {
    this.y = this.y - 1
  };
  left = () => {
    this.x = this.x - 1
  };
  origin = () => {
    this.x = 0; 
    this.y = 0
  };
};

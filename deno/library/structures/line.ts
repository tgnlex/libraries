import {Coordinates, Segment} from "../interface/index";

class Line implements Segment {
  start: Coordinates;
  end: Coordinates;
  constructor(start: Coordinates, end: Coordinates) {
    this.start = start;
    this.end = end;
  };
};

export default Line;
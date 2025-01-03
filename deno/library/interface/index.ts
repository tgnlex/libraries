interface Coordinates {
  x: number;
  y: number;
}

interface Segment {
  start: Coordinates;
  end: Coordinates;
};

export type { Coordinates, Segment };

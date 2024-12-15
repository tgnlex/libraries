const Point = struct {
    x: f32,
    y: f32,
    pub fn init(x: f32, y: f32) Point {
        return Point{
            .x = x,
            .y = y,
        };
    }
};
const Segment = struct {
    a: Point,
    b: Point,
    pub fn init(point_a: Point, point_b: Point) Segment {
        return Segment{
            .a = point_a,
            .b = point_b,
        };
    }
};

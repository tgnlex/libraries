const Rectangle = struct {
    length: u64,
    width: u64,
    perimeter: u64,
    area: u128,
    pub fn init(length: i64, width: i64) Rectangle {
        return Rectangle{
            .length = length,
            .width = width,
            .area = length * width,
            .perimeter = length * 2 + width * 2,
        };
    }
};

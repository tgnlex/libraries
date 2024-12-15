const Empty = struct {};
const Item = struct {
    value: undefined,
    data: type,
    pub fn init(value: undefined, T: type) Item {
        return Item{
            .value = value,
            .data = T,
        };
    }
};
const String = struct {
    value: []u8,
    pub fn init(value: []u8) String {
        return String{
            .value = value,
        };
    }
};
const KV = struct {
    key: []u8,
    value: undefined,
    pub fn init(key: []u8, value: undefined) KV {
        return KV{
            .key = key,
            .value = value,
        };
    }
};

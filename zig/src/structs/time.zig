const Timestamp = struct {
    seconds: i64,
    nanoseconds: u32,
    pub fn init() Timestamp {
        return Timestamp{ .seconds = 0, .nanoseconds = 0 };
    }
};

const Time = struct {
    hour: u32,
    minute: u32,
    second: u32,
    suffix: [2]u8,
    pub fn init(hour: u32, minute: u32, second: u32, suffix: [2]u8) Time {
        if (hour <= 12) {
            if (minute <= 60) {
                if (second <= 60) {
                    if (suffix == "AM" | "PM") {
                        return Time{ .hour = hour, .minute = minute, .second = second, .suffix = suffix };
                    }
                }
            }
        }
    }
};

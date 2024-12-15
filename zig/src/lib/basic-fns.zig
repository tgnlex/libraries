const std = @import("std");
pub fn noop() void {}
pub fn print(data: undefined) void {
    const stdout = std.io.getStdOut.writer();
    try stdout.print("{}", .{data});
}

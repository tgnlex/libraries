const Node = struct {
    prev: ?*Node,
    next: ?*Node,
    T: type,
    pub fn init(prev: ?*Node, next: ?*Node, T: type) Node {
        return Node{
            .prev = prev,
            .next = next,
            .data = T,
        };
    }
};

const LinkedList = struct {
    first: ?*Node,
    last: ?*Node,
    len: usize,
    pub fn init(first: ?*Node, last: ?*Node, len: usize) LinkedList {
        return LinkedList{ .first = first, .last = last, .len = len };
    }
};

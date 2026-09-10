class MinStack:
    """
    A stack that supports push, pop, top, and retrieving the minimum element in O(1) time.
    """
    def __init__(self):
        self.stack = []
        self.min_stack = []

    def push(self, val: int) -> None:
        self.stack.append(val)
        if not self.min_stack or val <= self.min_stack[-1]:
            self.min_stack.append(val)

    def pop(self) -> None:
        if self.stack:
            val = self.stack.pop()
            if val == self.min_stack[-1]:
                self.min_stack.pop()

    def top(self) -> int:
        return self.stack[-1]

    def get_min(self) -> int:
        return self.min_stack[-1]

if __name__ == "__main__":
    s = MinStack()
    s.push(-2)
    s.push(0)
    s.push(-3)
    print("Min:", s.get_min())
    assert s.get_min() == -3
    s.pop()
    print("Top after pop:", s.top())
    print("Min after pop:", s.get_min())
    assert s.get_min() == -2

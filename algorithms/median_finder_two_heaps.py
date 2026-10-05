import heapq

class MedianFinder:
    """
    Maintains max-heap for lower half and min-heap for upper half to find median in O(1).
    """
    def __init__(self):
        self.small = [] # max-heap (invert signs)
        self.large = [] # min-heap

    def add_num(self, num: int) -> None:
        heapq.heappush(self.small, -num)
        if self.small and self.large and (-self.small[0] > self.large[0]):
            val = -heapq.heappop(self.small)
            heapq.heappush(self.large, val)
        if len(self.small) > len(self.large) + 1:
            val = -heapq.heappop(self.small)
            heapq.heappush(self.large, val)
        if len(self.large) > len(self.small):
            val = heapq.heappop(self.large)
            heapq.heappush(self.small, -val)

    def find_median(self) -> float:
        if len(self.small) > len(self.large):
            return float(-self.small[0])
        return (-self.small[0] + self.large[0]) / 2.0

if __name__ == "__main__":
    mf = MedianFinder()
    for num in [1, 2, 3]:
        mf.add_num(num)
    print("Median of [1, 2, 3]:", mf.find_median())
    assert mf.find_median() == 2.0
    mf.add_num(4)
    print("Median of [1, 2, 3, 4]:", mf.find_median())
    assert mf.find_median() == 2.5

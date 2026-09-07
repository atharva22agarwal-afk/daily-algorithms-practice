import heapq
from typing import List

def find_kth_largest(nums: List[int], k: int) -> int:
    """
    Finds the k-th largest element in an unsorted array using a min-heap of size k.
    Time Complexity: O(n log k)
    Space Complexity: O(k)
    """
    min_heap = []
    for num in nums:
        heapq.heappush(min_heap, num)
        if len(min_heap) > k:
            heapq.heappop(min_heap)
    return min_heap[0]

if __name__ == "__main__":
    arr = [3, 2, 1, 5, 6, 4]
    k = 2
    print(f"{k}th largest element: {find_kth_largest(arr, k)}")
    assert find_kth_largest(arr, k) == 5

import bisect
from typing import List

def length_of_lis(nums: List[int]) -> int:
    """
    Finds length of longest strictly increasing subsequence in O(n log n) using patience sorting.
    Time Complexity: O(n log n)
    Space Complexity: O(n)
    """
    sub = []
    for num in nums:
        idx = bisect.bisect_left(sub, num)
        if idx == len(sub):
            sub.append(num)
        else:
            sub[idx] = num
    return len(sub)

if __name__ == "__main__":
    seq = [10, 9, 2, 5, 3, 7, 101, 18]
    print("Length of LIS:", length_of_lis(seq))
    assert length_of_lis(seq) == 4

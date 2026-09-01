from typing import List, Tuple, Optional

def two_sum(nums: List[int], target: int) -> Optional[Tuple[int, int]]:
    """
    Find two numbers in nums that add up to target and return their indices.
    Time Complexity: O(n)
    Space Complexity: O(n)
    """
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return (seen[complement], i)
        seen[num] = i
    return None

if __name__ == "__main__":
    nums = [2, 7, 11, 15]
    target = 9
    result = two_sum(nums, target)
    print(f"Two Sum result for {nums} with target {target}: {result}")
    assert result == (0, 1)

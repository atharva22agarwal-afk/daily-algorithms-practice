from typing import List

def max_sub_array(nums: List[int]) -> int:
    """
    Finds contiguous subarray with the largest sum.
    Time Complexity: O(n)
    Space Complexity: O(1)
    """
    max_so_far = current_max = nums[0]
    for num in nums[1:]:
        current_max = max(num, current_max + num)
        max_so_far = max(max_so_far, current_max)
    return max_so_far

if __name__ == "__main__":
    nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
    print("Max subarray sum:", max_sub_array(nums))
    assert max_sub_array(nums) == 6

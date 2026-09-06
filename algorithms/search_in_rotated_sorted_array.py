from typing import List

def search_rotated(nums: List[int], target: int) -> int:
    """
    Search for target in a rotated sorted array.
    Time Complexity: O(log n)
    Space Complexity: O(1)
    """
    left, right = 0, len(nums) - 1
    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        if nums[left] <= nums[mid]:
            if nums[left] <= target < nums[mid]:
                right = mid - 1
            else:
                left = mid + 1
        else:
            if nums[mid] < target <= nums[right]:
                left = mid + 1
            else:
                right = mid - 1
    return -1

if __name__ == "__main__":
    nums = [4, 5, 6, 7, 0, 1, 2]
    print("Found 0 at index:", search_rotated(nums, 0))
    assert search_rotated(nums, 0) == 4

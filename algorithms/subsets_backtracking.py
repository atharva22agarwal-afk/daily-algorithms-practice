from typing import List

def subsets(nums: List[int]) -> List[List[int]]:
    """
    Generates all subsets (power set) of unique integers.
    Time Complexity: O(2^n * n)
    Space Complexity: O(2^n * n)
    """
    res = []
    def backtrack(start: int, current: List[int]):
        res.append(list(current))
        for i in range(start, len(nums)):
            current.append(nums[i])
            backtrack(i + 1, current)
            current.pop()
    backtrack(0, [])
    return res

if __name__ == "__main__":
    nums = [1, 2, 3]
    res = subsets(nums)
    print(f"Total subsets of {nums}: {len(res)}")
    assert len(res) == 8

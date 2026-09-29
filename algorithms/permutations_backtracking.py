from typing import List

def permute(nums: List[int]) -> List[List[int]]:
    """
    Generates all possible permutations of an array of distinct integers.
    Time Complexity: O(n * n!)
    Space Complexity: O(n * n!)
    """
    res = []
    def backtrack(curr: List[int], remaining: List[int]):
        if not remaining:
            res.append(curr)
            return
        for i in range(len(remaining)):
            backtrack(curr + [remaining[i]], remaining[:i] + remaining[i+1:])
    backtrack([], nums)
    return res

if __name__ == "__main__":
    res = permute([1, 2, 3])
    print("Total permutations of [1, 2, 3]:", len(res))
    assert len(res) == 6

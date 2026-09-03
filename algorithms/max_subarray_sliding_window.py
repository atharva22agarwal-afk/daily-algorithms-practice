from typing import List

def max_sub_array_of_size_k(k: int, arr: List[int]) -> int:
    """
    Find the maximum sum of any contiguous subarray of size k.
    Time Complexity: O(n)
    Space Complexity: O(1)
    """
    if len(arr) < k:
        return 0
    window_sum = sum(arr[:k])
    max_sum = window_sum
    for i in range(k, len(arr)):
        window_sum += arr[i] - arr[i - k]
        max_sum = max(max_sum, window_sum)
    return max_sum

if __name__ == "__main__":
    sample = [2, 1, 5, 1, 3, 2]
    k = 3
    print(f"Max sum of subarray of size {k}: {max_sub_array_of_size_k(k, sample)}")
    assert max_sub_array_of_size_k(k, sample) == 9

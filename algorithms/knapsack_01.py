from typing import List

def knapsack(weights: List[int], values: List[int], capacity: int) -> int:
    """
    Computes maximum value achievable in 0/1 Knapsack with given capacity.
    Time Complexity: O(n * capacity)
    Space Complexity: O(capacity)
    """
    dp = [0] * (capacity + 1)
    for w, v in zip(weights, values):
        for c in range(capacity, w - 1, -1):
            dp[c] = max(dp[c], dp[c - w] + v)
    return dp[capacity]

if __name__ == "__main__":
    weights = [1, 3, 4, 5]
    values = [1, 4, 5, 7]
    cap = 7
    print("Max Knapsack value:", knapsack(weights, values, cap))
    assert knapsack(weights, values, cap) == 9

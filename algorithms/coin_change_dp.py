from typing import List

def coin_change(coins: List[int], amount: int) -> int:
    """
    Finds the fewest number of coins needed to make up amount.
    Time Complexity: O(amount * len(coins))
    Space Complexity: O(amount)
    """
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0
    for coin in coins:
        for x in range(coin, amount + 1):
            dp[x] = min(dp[x], dp[x - coin] + 1)
    return dp[amount] if dp[amount] != float('inf') else -1

if __name__ == "__main__":
    coins = [1, 2, 5]
    amount = 11
    print(f"Fewest coins for {amount}:", coin_change(coins, amount))
    assert coin_change(coins, amount) == 3

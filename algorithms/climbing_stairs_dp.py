def climb_stairs(n: int) -> int:
    """
    Counts distinct ways to climb n stairs taking 1 or 2 steps.
    Time Complexity: O(n)
    Space Complexity: O(1)
    """
    if n <= 2:
        return n
    first, second = 1, 2
    for _ in range(3, n + 1):
        third = first + second
        first, second = second, third
    return second

if __name__ == "__main__":
    print("Ways to climb 5 stairs:", climb_stairs(5))
    assert climb_stairs(5) == 8

def longest_common_subsequence(text1: str, text2: str) -> int:
    """
    Finds length of the longest common subsequence of two strings.
    Time Complexity: O(m * n)
    Space Complexity: O(m * n)
    """
    m, n = len(text1), len(text2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if text1[i - 1] == text2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
    return dp[m][n]

if __name__ == "__main__":
    s1, s2 = "abcde", "ace"
    print("LCS length:", longest_common_subsequence(s1, s2))
    assert longest_common_subsequence(s1, s2) == 3

from typing import List

def exist(board: List[List[str]], word: str) -> bool:
    """
    Checks if a word exists in the 2D grid using DFS backtracking.
    Time Complexity: O(m * n * 4^L)
    Space Complexity: O(L)
    """
    rows, cols = len(board), len(board[0])
    def dfs(r: int, c: int, i: int) -> bool:
        if i == len(word):
            return True
        if r < 0 or c < 0 or r >= rows or c >= cols or board[r][c] != word[i]:
            return False
        temp = board[r][c]
        board[r][c] = "#"
        found = (dfs(r + 1, c, i + 1) or
                 dfs(r - 1, c, i + 1) or
                 dfs(r, c + 1, i + 1) or
                 dfs(r, c - 1, i + 1))
        board[r][c] = temp
        return found

    for r in range(rows):
        for c in range(cols):
            if dfs(r, c, 0):
                return True
    return False

if __name__ == "__main__":
    board = [
        ['A', 'B', 'C', 'E'],
        ['S', 'F', 'C', 'S'],
        ['A', 'D', 'E', 'E']
    ]
    print("Word 'ABCCED' exists:", exist(board, "ABCCED"))
    assert exist(board, "ABCCED") is True

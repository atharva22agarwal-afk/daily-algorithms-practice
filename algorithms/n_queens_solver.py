from typing import List

def solve_n_queens(n: int) -> List[List[str]]:
    """
    Places n queens on an n x n chessboard such that no two queens attack each other.
    Time Complexity: O(n!)
    Space Complexity: O(n)
    """
    col = set()
    pos_diag = set() # (r + c)
    neg_diag = set() # (r - c)
    res = []
    board = [["."] * n for _ in range(n)]

    def backtrack(r: int):
        if r == n:
            res.append(["".join(row) for row in board])
            return
        for c in range(n):
            if c in col or (r + c) in pos_diag or (r - c) in neg_diag:
                continue
            col.add(c)
            pos_diag.add(r + c)
            neg_diag.add(r - c)
            board[r][c] = "Q"

            backtrack(r + 1)

            col.remove(c)
            pos_diag.remove(r + c)
            neg_diag.remove(r - c)
            board[r][c] = "."

    backtrack(0)
    return res

if __name__ == "__main__":
    solutions = solve_n_queens(4)
    print(f"Total 4-Queens solutions: {len(solutions)}")
    assert len(solutions) == 2

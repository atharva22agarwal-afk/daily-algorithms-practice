from collections import deque
from typing import List

def num_islands(grid: List[List[str]]) -> int:
    """
    Counts the number of connected 1s in a grid.
    Time Complexity: O(m * n)
    Space Complexity: O(min(m, n))
    """
    if not grid:
        return 0
    rows, cols = len(grid), len(grid[0])
    islands = 0

    def bfs(r, c):
        q = deque([(r, c)])
        grid[r][c] = '0'
        while q:
            row, col = q.popleft()
            for dr, dc in [(1, 0), (-1, 0), (0, 1), (0, -1)]:
                nr, nc = row + dr, col + dc
                if 0 <= nr < rows and 0 <= nc < cols and grid[nr][nc] == '1':
                    grid[nr][nc] = '0'
                    q.append((nr, nc))

    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == '1':
                islands += 1
                bfs(r, c)
    return islands

if __name__ == "__main__":
    grid = [
        ["1", "1", "0", "0", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "1", "0", "0"],
        ["0", "0", "0", "1", "1"]
    ]
    print("Total islands:", num_islands(grid))
    assert num_islands(grid) == 3

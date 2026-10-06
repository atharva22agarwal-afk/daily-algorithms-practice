import heapq
from typing import List, Tuple, Optional

def heuristic(a: Tuple[int, int], b: Tuple[int, int]) -> int:
    """Manhattan distance heuristic on a 4-directional grid."""
    return abs(a[0] - b[0]) + abs(a[1] - b[1])

def a_star_search(grid: List[List[int]], start: Tuple[int, int], goal: Tuple[int, int]) -> Optional[List[Tuple[int, int]]]:
    """
    Finds the optimal path from start to goal around obstacles (0 = open, 1 = obstacle).
    Time Complexity: O(E log V)
    Space Complexity: O(V)
    """
    rows, cols = len(grid), len(grid[0])
    open_set = [(heuristic(start, goal), 0, start)] # (f_score, g_score, node)
    came_from = {}
    g_score = {start: 0}

    while open_set:
        _, curr_g, current = heapq.heappop(open_set)
        if current == goal:
            path = []
            while current in came_from:
                path.append(current)
                current = came_from[current]
            path.append(start)
            return path[::-1]

        r, c = current
        for dr, dc in [(0, 1), (1, 0), (0, -1), (-1, 0)]:
            nr, nc = r + dr, c + dc
            neighbor = (nr, nc)
            if 0 <= nr < rows and 0 <= nc < cols and grid[nr][nc] == 0:
                tentative_g = curr_g + 1
                if tentative_g < g_score.get(neighbor, float('inf')):
                    came_from[neighbor] = current
                    g_score[neighbor] = tentative_g
                    f_score = tentative_g + heuristic(neighbor, goal)
                    heapq.heappush(open_set, (f_score, tentative_g, neighbor))
    return None

if __name__ == "__main__":
    # 0 = free, 1 = obstacle
    maze = [
        [0, 0, 0, 0, 0],
        [1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1],
        [0, 0, 0, 0, 0]
    ]
    start_pos = (0, 0)
    goal_pos = (4, 4)
    path = a_star_search(maze, start_pos, goal_pos)
    print("A* Path found:", path)
    assert path is not None and path[0] == start_pos and path[-1] == goal_pos

from typing import List, Tuple, Dict, Optional

def bellman_ford(vertices: List[str], edges: List[Tuple[str, str, int]], start: str) -> Optional[Dict[str, float]]:
    """
    Finds shortest paths from start to all vertices and detects negative weight cycles.
    Time Complexity: O(V * E)
    Space Complexity: O(V)
    """
    distances = {v: float('inf') for v in vertices}
    distances[start] = 0.0

    for _ in range(len(vertices) - 1):
        for u, v, w in edges:
            if distances[u] != float('inf') and distances[u] + w < distances[v]:
                distances[v] = distances[u] + w

    # Negative cycle check
    for u, v, w in edges:
        if distances[u] != float('inf') and distances[u] + w < distances[v]:
            print("Negative weight cycle detected!")
            return None
    return distances

if __name__ == "__main__":
    v = ['A', 'B', 'C', 'D']
    edges = [('A', 'B', 4), ('A', 'C', 5), ('B', 'D', 3), ('C', 'B', -2), ('C', 'D', 4)]
    dist = bellman_ford(v, edges, 'A')
    print("Bellman-Ford shortest distances:", dist)
    assert dist['D'] == 6

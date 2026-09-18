import heapq
from typing import Dict, List, Tuple

def dijkstra(graph: Dict[str, List[Tuple[str, int]]], start: str) -> Dict[str, int]:
    """
    Calculates shortest distances from start node to all nodes in a weighted graph.
    Time Complexity: O((V + E) log V)
    Space Complexity: O(V)
    """
    distances = {node: float('inf') for node in graph}
    distances[start] = 0
    pq = [(0, start)]
    while pq:
        curr_dist, u = heapq.heappop(pq)
        if curr_dist > distances[u]:
            continue
        for v, weight in graph[u]:
            distance = curr_dist + weight
            if distance < distances[v]:
                distances[v] = distance
                heapq.heappush(pq, (distance, v))
    return distances

if __name__ == "__main__":
    graph = {
        'A': [('B', 1), ('C', 4)],
        'B': [('C', 2), ('D', 5)],
        'C': [('D', 1)],
        'D': []
    }
    dist = dijkstra(graph, 'A')
    print("Shortest distances from A:", dist)
    assert dist['D'] == 4

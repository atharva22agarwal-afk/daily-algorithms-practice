from collections import deque, defaultdict
from typing import List, Dict

def topological_sort(num_courses: int, prerequisites: List[List[int]]) -> List[int]:
    """
    Finds topological ordering of a Directed Acyclic Graph (DAG) using Kahn's algorithm.
    Time Complexity: O(V + E)
    Space Complexity: O(V + E)
    """
    in_degree = [0] * num_courses
    adj = defaultdict(list)
    for dest, src in prerequisites:
        adj[src].append(dest)
        in_degree[dest] += 1
    
    queue = deque([i for i in range(num_courses) if in_degree[i] == 0])
    order = []
    while queue:
        u = queue.popleft()
        order.append(u)
        for v in adj[u]:
            in_degree[v] -= 1
            if in_degree[v] == 0:
                queue.append(v)
    return order if len(order) == num_courses else []

if __name__ == "__main__":
    prereqs = [[1, 0], [2, 0], [3, 1], [3, 2]]
    order = topological_sort(4, prereqs)
    print("Topological order:", order)
    assert len(order) == 4

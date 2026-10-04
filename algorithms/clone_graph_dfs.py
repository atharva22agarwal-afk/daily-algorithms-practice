from typing import Optional, Dict

class Node:
    def __init__(self, val: int = 0, neighbors=None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []

def clone_graph(node: Optional[Node]) -> Optional[Node]:
    """
    Creates a deep copy of a connected undirected graph.
    Time Complexity: O(V + E)
    Space Complexity: O(V)
    """
    if not node:
        return None
    cloned: Dict[Node, Node] = {}
    def dfs(curr: Node) -> Node:
        if curr in cloned:
            return cloned[curr]
        copy = Node(curr.val)
        cloned[curr] = copy
        for nei in curr.neighbors:
            copy.neighbors.append(dfs(nei))
        return copy
    return dfs(node)

if __name__ == "__main__":
    n1, n2 = Node(1), Node(2)
    n1.neighbors.append(n2)
    n2.neighbors.append(n1)
    c1 = clone_graph(n1)
    print("Graph cloned. New node val:", c1.val, "Neighbor val:", c1.neighbors[0].val)
    assert c1 is not n1 and c1.val == 1

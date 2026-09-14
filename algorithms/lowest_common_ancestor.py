from typing import Optional

class TreeNode:
    def __init__(self, val: int = 0, left: Optional['TreeNode'] = None, right: Optional['TreeNode'] = None):
        self.val = val
        self.left = left
        self.right = right

def lowest_common_ancestor(root: Optional[TreeNode], p: TreeNode, q: TreeNode) -> Optional[TreeNode]:
    """
    Finds the lowest common ancestor of two given nodes in the binary tree.
    Time Complexity: O(n)
    Space Complexity: O(h)
    """
    if not root or root == p or root == q:
        return root
    left = lowest_common_ancestor(root.left, p, q)
    right = lowest_common_ancestor(root.right, p, q)
    if left and right:
        return root
    return left if left else right

if __name__ == "__main__":
    p = TreeNode(5)
    q = TreeNode(1)
    root = TreeNode(3, p, q)
    lca = lowest_common_ancestor(root, p, q)
    print("LCA:", lca.val)
    assert lca.val == 3

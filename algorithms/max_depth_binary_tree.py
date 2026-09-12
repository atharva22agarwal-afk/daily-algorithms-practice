from typing import Optional

class TreeNode:
    def __init__(self, val: int = 0, left: Optional['TreeNode'] = None, right: Optional['TreeNode'] = None):
        self.val = val
        self.left = left
        self.right = right

def max_depth(root: Optional[TreeNode]) -> int:
    """
    Computes the maximum depth of a binary tree.
    Time Complexity: O(n)
    Space Complexity: O(h) where h is tree height
    """
    if not root:
        return 0
    return 1 + max(max_depth(root.left), max_depth(root.right))

if __name__ == "__main__":
    root = TreeNode(1, TreeNode(2), TreeNode(3, None, TreeNode(4)))
    print("Max depth:", max_depth(root))
    assert max_depth(root) == 3

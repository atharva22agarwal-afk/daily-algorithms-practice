from typing import Optional

class TreeNode:
    def __init__(self, val: int = 0, left: Optional['TreeNode'] = None, right: Optional['TreeNode'] = None):
        self.val = val
        self.left = left
        self.right = right

def invert_tree(root: Optional[TreeNode]) -> Optional[TreeNode]:
    """
    Inverts a binary tree recursively.
    Time Complexity: O(n)
    Space Complexity: O(h)
    """
    if not root:
        return None
    root.left, root.right = invert_tree(root.right), invert_tree(root.left)
    return root

if __name__ == "__main__":
    root = TreeNode(4, TreeNode(2), TreeNode(7))
    inv = invert_tree(root)
    print("Inverted root left:", inv.left.val, "right:", inv.right.val)
    assert inv.left.val == 7 and inv.right.val == 2

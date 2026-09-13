from typing import Optional

class TreeNode:
    def __init__(self, val: int = 0, left: Optional['TreeNode'] = None, right: Optional['TreeNode'] = None):
        self.val = val
        self.left = left
        self.right = right

def is_valid_bst(root: Optional[TreeNode], low=float('-inf'), high=float('inf')) -> bool:
    """
    Verifies if a binary tree is a valid Binary Search Tree.
    Time Complexity: O(n)
    Space Complexity: O(h)
    """
    if not root:
        return True
    if not (low < root.val < high):
        return False
    return is_valid_bst(root.left, low, root.val) and is_valid_bst(root.right, root.val, high)

if __name__ == "__main__":
    valid_bst = TreeNode(2, TreeNode(1), TreeNode(3))
    print("Is valid BST?", is_valid_bst(valid_bst))
    assert is_valid_bst(valid_bst) is True

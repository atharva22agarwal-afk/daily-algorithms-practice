from typing import Optional

class ListNode:
    def __init__(self, val: int = 0, next: Optional['ListNode'] = None):
        self.val = val
        self.next = next

def has_cycle(head: Optional[ListNode]) -> bool:
    """
    Detects if a linked list contains a cycle using Floyd's algorithm.
    Time Complexity: O(n)
    Space Complexity: O(1)
    """
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    return False

if __name__ == "__main__":
    n1, n2, n3, n4 = ListNode(3), ListNode(2), ListNode(0), ListNode(-4)
    n1.next = n2; n2.next = n3; n3.next = n4; n4.next = n2
    print(f"Cycle detected: {has_cycle(n1)}")
    assert has_cycle(n1) is True

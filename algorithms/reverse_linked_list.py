from typing import Optional

class ListNode:
    def __init__(self, val: int = 0, next: Optional['ListNode'] = None):
        self.val = val
        self.next = next

def reverse_list(head: Optional[ListNode]) -> Optional[ListNode]:
    """
    Reverses a singly linked list in-place.
    Time Complexity: O(n)
    Space Complexity: O(1)
    """
    prev = None
    curr = head
    while curr:
        nxt = curr.next
        curr.next = prev
        prev = curr
        curr = nxt
    return prev

if __name__ == "__main__":
    head = ListNode(1, ListNode(2, ListNode(3, ListNode(4, None))))
    rev = reverse_list(head)
    vals = []
    while rev:
        vals.append(rev.val)
        rev = rev.next
    print("Reversed list:", vals)
    assert vals == [4, 3, 2, 1]

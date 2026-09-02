def is_palindrome(s: str) -> bool:
    """
    Determines if a string is a palindrome considering only alphanumeric characters and ignoring cases.
    Time Complexity: O(n)
    Space Complexity: O(1)
    """
    left, right = 0, len(s) - 1
    while left < right:
        while left < right and not s[left].isalnum():
            left += 1
        while left < right and not s[right].isalnum():
            right -= 1
        if s[left].lower() != s[right].lower():
            return False
        left += 1
        right -= 1
    return True

if __name__ == "__main__":
    test_str = "A man, a plan, a canal: Panama"
    print(f"Is '{test_str}' a palindrome? {is_palindrome(test_str)}")
    assert is_palindrome(test_str) is True

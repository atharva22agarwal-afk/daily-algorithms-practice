def is_valid_parentheses(s: str) -> bool:
    """
    Checks if a string of brackets is valid.
    Time Complexity: O(n)
    Space Complexity: O(n)
    """
    stack = []
    mapping = {')': '(', '}': '{', ']': '['}
    for char in s:
        if char in mapping:
            top_element = stack.pop() if stack else '#'
            if mapping[char] != top_element:
                return False
        else:
            stack.append(char)
    return not stack

if __name__ == "__main__":
    sample = "{[()]}"
    print(f"Is '{sample}' valid? {is_valid_parentheses(sample)}")
    assert is_valid_parentheses(sample) is True

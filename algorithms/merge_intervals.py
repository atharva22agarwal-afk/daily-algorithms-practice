from typing import List

def merge_intervals(intervals: List[List[int]]) -> List[List[int]]:
    """
    Merge all overlapping intervals.
    Time Complexity: O(n log n)
    Space Complexity: O(n)
    """
    if not intervals:
        return []
    intervals.sort(key=lambda x: x[0])
    merged = [intervals[0]]
    for current in intervals[1:]:
        prev = merged[-1]
        if current[0] <= prev[1]:
            prev[1] = max(prev[1], current[1])
        else:
            merged.append(current)
    return merged

if __name__ == "__main__":
    intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
    res = merge_intervals(intervals)
    print(f"Merged intervals: {res}")
    assert res == [[1, 6], [8, 10], [15, 18]]

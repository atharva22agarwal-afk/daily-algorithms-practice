from typing import List, Dict

class TrieNode:
    def __init__(self):
        self.children: Dict[str, TrieNode] = {}
        self.is_end = False

class AutocompleteTrie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word: str) -> None:
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_end = True

    def autocomplete(self, prefix: str) -> List[str]:
        node = self.root
        for char in prefix:
            if char not in node.children:
                return []
            node = node.children[char]
        results = []
        def dfs(curr: TrieNode, path: str):
            if curr.is_end:
                results.append(path)
            for ch, child in curr.children.items():
                dfs(child, path + ch)
        dfs(node, prefix)
        return results

if __name__ == "__main__":
    trie = AutocompleteTrie()
    for w in ["python", "pyramid", "pytorch", "algorithm"]:
        trie.insert(w)
    print("Suggestions for 'py':", trie.autocomplete("py"))
    assert len(trie.autocomplete("py")) == 3

学习笔记

### Hash Table: 
A type of data structure that map key to value in an array. it uses a hash function to compute index and get it's associated value
### Hash Collisions: 
Where the key index created for each value are duplicated. in a large hash table is unavoidable. but by using better design in hash function we can lower the chances of collision
### Collision resolution: 
Use separate chaining with linked list, when multiple value have same hash key, they will all become a subset under that hash, and chaining together with linked list
### Time complexity: 
best case O(1), worst case O(n). if a hash function is poorly designed, and collision rate is high, complexity can increase

### 4 step to to start every code challenge
1. clarification 
	- understand question
	- confirm your understanding with interviewee
2. find all possible solution
	- find and list all possible solution 
	- Analyze each solution and pick the optimal one (time & space)
3. start coding with the optimal solution
4. test your code
	- find edge case

### Tree: 
- similar to linked list but inkstand of pointing to 1 next value, it points to 2 next value
	- parent node: a node that is one level above and linked to current node
	- child node: nodes that one level directly below a parent node
	- sibling nodes: two nodes that shared same parent node.
- linked list is a special tree that have only each node only has one child node
- tree is a special type of graph, that each node only links to it's child nodes

### Tree traversal: 
- Pre-Order: find root node first then two child nodes
- In-Order: find left child node first, then root node, then right child node
- Post-Order: find two child nodes first, then root node

### Binary Search Tree (Ordered Binary Tree, Sorted Binary Tree):
- every left child node' value is smaller then it's parent node's value
- every right child node's value is bigger then it's parent node's value
- all it's sub tree follows the above rules
- when look up a value, is traverse thought the tree, and compare the value with node, if value is smaller then the node then compare it's left child node, until value is found or reached to bottom of the tree (O(logN))
- insert a new node, just like look up, once get to the bottom of the tree attach to a parent node (O(logN))
- remove a node, find the node, remove it and replace it with a next larger or smaller node. (O(logN))
- usually uses Recursion

### Heap:
- a data structure that can find the max or min value from a set of data, min-heap, max-heap
	- find max or min value only takes O(1)
	- delete-max or min O(logN)
	- inset O(loN) or O(1)
- common implementation : Binary heap, Fibonacci heap
- Binary Heap:
	- definition:
		- using binary tree to make a heap, but this is not a Binary Search Tree
		- root node is always the larges value
		- it's a full binary tree (each node must have either 0 or 2 child node, expect the most bottom level node)
		- value of any node is always larger or equal to any of it's child node
	- a Binary Heap in commonly implemented by a array
		- if root node index is 0 then it's left child node's index is (2*i + 1), right child node's index is (2*i + 2)
		- any node's parent node index is floor((i-1)/2)
        - ![Binart Heap array](BinartHeapArray.png)
		- loop up max node, just return the root node, O(1)
		- inert a node:
			- first insert the node to the end heap
			- if node is larger then it's parent node then swap with parent, repeat until parent node is larger then inserted node
			- this is called HeapifyUp O(logN)
		- delete a node:
			- remove root node and replace it with the most bottom node
			- move the top node down, swap position with child node what is large then this node.
			- this is called HeapifyDown O(logN)
        - ![Heapify Down](HeapifyDown.png)
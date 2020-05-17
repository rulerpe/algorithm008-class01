Traverse through all node in the tree, and only traverse once on every node
### DFS(Depth First Search):
- find the depth-est level of each branch first and go back to it's root and other node in the same level
- usually implement by using recursion
### BFS(Breadth First Serach):
- find all node on a level first then go to next level.
- use a first in first out queue to implement,
	
### Greedy algorithm
- choose the best choice at each step, to get the best and most efficient solution
- different between greedy and dynamic algorithm
	- greedy algorithm does not back track, it's make choice on every step.
	- dynamic algorithm stores result from previous steps, and compare with current step to make decision ,it's able to back track
- most of time pure Greedy algorithm does not solve real life problem
- but if a problem can be answered by greedy algorithm , then it will be the best solution.
- it's mostly used as a support for other algorithm.

### Binary search 
- index accessible, has upper and lower boundary, 
- list must be sorted
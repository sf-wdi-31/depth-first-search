# Breadth First Search

Breadth First Search is an algorithm for searching through graphs, looking for one or more nodes that meet some search criteria. With `has_key`, we saw a strategy to search for a particular key in a binary search tree, taking advantage of the fact that each node's left subtree contains smaller keys and each node's right subtree contains larger keys.  

Breadth First Search is more general -- it doesn't make any assumptions about the relationships among nodes' keys. In fact, we can search based on criteria that aren't based on keys at all. With the tree of hex color names, we could use Breadth First Search to find all of the colors created by one user. 

**Breadth First Search chooses a start node and "visits" every node of a graph in order of how far the node is from that start.**  In a tree, we pick the root as the start node. We'll also consider each node to be the same "distance" from its parent. In graph terms, that means the "weight" of each edge is the same. It's definitely possible to extend Breadth First Search to graphs with (differently) weighted edges, but we won't do that today.

Breadth First Search spreads like a mold across the tree or graph.


## Hex Color Exercise

1. Pseudocode how you would use breadth first search to find all of the colors created by a particular user in the hex color naming tree. 


## Choose Your Earliest Win

1. A choose your own adventure book is composed of many chunks of a story. The book gives readers a choice at the end of each chunk about what the main character in the story should do. Each option sends the reader to a different page to read another chunk of the story that says what happens based on their decision.

	```
	...

	What will you do?
	To release the fairy from the jar, go to page 89.
	To ask the fairy about the Sword of Truth, go to page 43.
	To run back to the clearing, go to page 200.
	```

	Choose your own adventure books can usually either end happily, or end badly (with the main character's death/capture/etc). Write a program to find the minimum number of decisions that could lead to a happy ending, in a choose your own adventure book. 


Q: How will you know if an ending is "happy"? (A: assume a happy ending node has a `happy_ending` attribute set to `true`.)

Q: Can we ever have two stories share a chunk / take a route that goes through the same page?  (A: For a simpler version of the problem, you can start off assuming no. But when you code the full thing, yes.)

Q: Can we ever have a cycle, where you keep visiting the same pages over and over again? (A: No. That wouldn't be a very fun book. But as a stretch you can consider how you would handle that!)

Q: What data structure will you use to represent the choose your own adventure book?
<!--
Creator: Team
Last Edited By: Brianna
Location: SF
-->

![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Depth-first Tree Traversal

### Why is this important?
<!-- framing the "why" in big-picture/real world examples -->
*This workshop is important because:*

We can traverse trees or graphs in many orders.  Depth-first traversal is a very common tree traversal pattern. For some problems, it's more appropriate than breadth-first search.

### What are the objectives?
<!-- specific/measurable goal for students to achieve -->
*After this workshop, developers will be able to:*

- Describe and draw depth-first tree traversal.
- Compare and contrast depth-first and breadth-first.
- Pseudocode depth-first search.
- Identify use cases for depth-first search.

### Where should we be now?
<!-- call out the skills that are prerequisites -->
*Before this workshop, developers should already be able to:*

- Explain tree terms: root, node, edge/branch, leaf, parent, child.
- Describe and/or draw breadth-first traversal.
- Follow the flow of recursive functions.

# Depth-first Search

Depth-first traversal traverses (goes over) every node in a graph.  Depth-first search is an algorithm that searches through (potentially) every node in a graph. Like with Breadth-first search, we can search for many keys, search by criteria that aren't based on keys, and keep track of depth.

**Depth-first search chooses a start node and "visits" all the nodes in the graph by following each path as far (as deep) as it can before going to the next path.**  In a tree, we pick the root as the start node (surprise!).

Depth-first search follows an "always go left" or "always go right" path like some people use to systematically solve mazes.

![depth-first search animation](https://upload.wikimedia.org/wikipedia/commons/7/7f/Depth-First-Search.gif)

Breadth-first search used a queue (first in is first out) to keep track of which nodes to visit next.  Depth-first search, in its iterative form, uses a stack (first in is last out).  Depth-first search can be done recursively, too. The iterative version translates more easily to graphs that might have looping paths (after you see both versions, think about why that is).


## Exercises: Depth First Tree Search

1. In English, describe how you would use depth-first search to determine whether any node in a tree has a given key. Your algorithm should assume you have a tree data structure and that you can access each node's key its array of children. (Do not assume it's a binary search tree.) You should also assume you're given a target key to match.


1. On the whiteboard, pseudocode a depth-first search function. As usual, assume you have a tree data structure that allows the following operations:

	* given a tree/node `my_tree`, get the root of the tree with `my_tree`
	* given a tree/node, get the key of the node with `.key`
	* given a tree/node, get the children of the node with `.children`

	Once you finish your pseudocode, check it versus the pseudocode in [the solutions](solutions.md).


1. Copy the starter code in either `tree.js` or `tree.rb`.  You'll see these files now have blanks and informal "tests" for depth-first search.  Fill in the depth-first search function in one of these files with actual code code. Run `node tree.js` or `ruby tree.rb` to see the informal tests work on your file.

	Note: The Ruby solution only has an iterative version.  The JavaScript solution has an iterative and a recursive version. To see the output from only the recursive version in the Terminal, use `node tree-solution.js recursive`. For iterative only, use `node tree-solution.js iterative`.

1. A trie is a kind of tree that stores sequential data like words or phone numbers. Each item in the sequence is an edge of the tree, and some nodes are marked as the end of a sequence.  A common example is storing words.  Here's an example from the [wikipedia page](https://en.wikipedia.org/wiki/Trie), storing words with some extra numerical data:

	<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Trie_example.svg/500px-Trie_example.svg.png" width="">

  **How would you use depth-first search to print out all of the words in a trie?**

1. When would you use depth-first search, and when would you use breadth first search?

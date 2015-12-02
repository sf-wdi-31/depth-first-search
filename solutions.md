## Exercises: Depth First Tree Search

1. In English, describe how you would use depth first search to determine whether any node in a tree has a given key. Your algorithm should assume you have a tree data structure and that you can access each node's key its array of children. (Do not assume it's a binary search tree.) You should also assume you're given a target key to match.



	```
	set up a list of nodes to check
	track whether we've visited/processed each one
	start at the root, and say we haven't processed it yet

	for every node we visit/process:
		if the node has been visited already, remove it from the stack
		if the node hasn't been visited yet:
			if the node's key matches the target key, we're done! (return node)
			mark the node as visited in the stack
			add the node's children to the top of the stack (end of the array)

	once there are no more nodes in the stack, we're done

	```

1. On the whiteboard, pseudocode a depth first search function. As usual, assume you have a tree data structure that allows the following operations:
	
	* given a tree/node `my_tree`, get the root of the tree with `my_tree`
	* given a tree/node, get the key of the node with `.key`
	* given a tree/node, get the children of the node with `.children`



	```python
	def depth_first_search(tree, target_key):
		if tree.key == target_key:
			return tree
		else if !tree.left && !tree.right
			return None
		else 
			if tree.left
				left_result = depth_first_search(tree.left, target_key)
			else # tree must have a tree.right
				right_result = depth_first_search(tree.right, target_key)
			if 

	end
	```


1. Copy the starter code in either `tree.js` or `tree.rb`.  You'll see these files now have blanks and informal "tests" for depth first search.  Fill in the depth first search function in one of these files with actual code code. Run `node tree.js` or `ruby tree.rb` to see the informal tests work on your file.

	*See `tree-solution.js` or `tree-solution.rb`.*


1. When would you use depth first search, and when would you use breadth first search?

	*Depth first search is a good idea if your goal/target nodes are mostly near the bottom of the tree. Breadth first search is better if you might have goal/target nodes near the root but down any branch.

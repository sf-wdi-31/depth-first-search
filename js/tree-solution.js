// Note: To run only recursive version of depth first search tests from the Terminal
// use `node tree-solution.js recursive`.
// For iterative only, use `node tree-solution.js iterative`.


// This object type represents a tree
// where each node has an array of children.
var TreeNode = function (key, children){
	this.key = key;
	this.children = children || [];	// an array, holds the TreeNodes that we can go to directly from here
};

// Searches through tree for a single node whose key is equal to
// the +targetKey+ param. Looks through nodes in a depth-first order,
// by following each path as deep as it can before backtracking.
// Returns null if no such node is found.
TreeNode.prototype.depthFirstSearch	= function(targetKey) {
	var stack = [this];
	var current;

	while (stack.length !== 0) {
		// print out key of each node in stack to help with debugging
		console.log("stack: ", stack.map(function(node){
			return node.key;
		}));
		// pop top item off of the stack
		current = stack.pop();
		if (current.key == targetKey){
			return current;
		} else {
			stack.concat(current.children)
		}
	}
	// we've gone through all nodes in the tree without returning
	// which means we the tree doesn't have our key!
	return null;
};


TreeNode.prototype.depthFirstSearchRecursive = function(targetKey) {
	// current node is this
	console.log("processing ", this.key);
	if (this.key == targetKey){
		return this;
	}
	var len = this.children.length;
	var i = 0;
	var childResult = null;

	for (; i<len; i++) {
		// recursively search each child
		childResult = this.children[i].depthFirstSearchRecursive(targetKey);
		if (childResult){
			// if child has a node matching the target, can return it
			return childResult;
		}
	}

	// if we reach this point without returning,
	// neither this node nor any in its subtree had the target key
	console.log("finished ", this.key);
	return null;
};

// Searches through tree for a single node whose key is equal to
// the +targetKey+ param. Looks through nodes in a depth-first order,
// by following each path as deep as it can before backtracking.
// Returns null if no such node is found.
//
// This version tracks whether a node has been "visited," which is
// useful for more general graphs (not just trees).
TreeNode.prototype.depthFirstSearch	= function(targetKey) {
	var stack = [{node: this, visited: false}];
	var current;

	var addChildToStack = function(child){
		stack.push({node: child, visited: false});
	};

	while (stack.length !== 0) {
		// print out key of each node in stack to help with debugging
		console.log("stack: ", stack.map(function(entry){
			return entry.node.key + (entry.visited ? "." : "");
		}));
		// peek at top item in the stack
		current = stack[stack.length-1];
		if (current.node.key == targetKey){
			return current.node;
		}
		if (current.visited){
			stack.pop();
		} else {
			current.visited = true;
			current.node.children.forEach(addChildToStack);
		}
	}
	return null;
};



var myTree = new TreeNode('Q'),
	rNode = new TreeNode('R'),
	sNode = new TreeNode('S'),
	tNode = new TreeNode('T'),
	uNode = new TreeNode('U'),
	vNode = new TreeNode('V'),
	wNode = new TreeNode('W');

myTree.children.push(rNode, sNode);
rNode.children.push(tNode, uNode, vNode);
uNode.children.push(wNode);

//          T
//        /
//     R  -- U -- W
//   /	  \
// Q        V
//   \
//     S



//************ ITERATIVE ****************//
if (!process.argv[2] || process.argv[2] == "iterative") {
	console.log("\n-- expect node U --");
	console.log(myTree.depthFirstSearch('U'));
	// -- expect node U --
	// stack:  [ 'Q' ]
	// stack:  [ 'Q., 'R', 'S' ]
	// stack:  [ 'Q., 'R', 'S.' ]
	// stack:  [ 'Q., 'R' ]
	// stack:  [ 'Q., 'R.', 'T', 'U', 'V' ]
	// stack:  [ 'Q., 'R.', 'T', 'U', 'V.' ]
	// stack:  [ 'Q., 'R.', 'T', 'U' ]
	// { key: 'U', children: [ { key: 'W', children: [] } ] }


	console.log("\n-- expect node W --");
	console.log(myTree.depthFirstSearch('W'));
	// -- expect node W --
	// stack:  [ 'Q' ]
	// stack:  [ 'Q., 'R', 'S' ]
	// stack:  [ 'Q., 'R', 'S.' ]
	// stack:  [ 'Q., 'R' ]
	// stack:  [ 'Q., 'R.', 'T', 'U', 'V' ]
	// stack:  [ 'Q., 'R.', 'T', 'U', 'V.' ]
	// stack:  [ 'Q., 'R.', 'T', 'U' ]
	// stack:  [ 'Q., 'R.', 'T', 'U.', 'W' ]
	// { key: 'W', children: [] }


	console.log("\n-- expect null --");
	console.log(myTree.depthFirstSearch('Z'));
	// -- expect null --
	// stack:  [ 'Q' ]
	// stack:  [ 'Q., 'R', 'S' ]
	// stack:  [ 'Q., 'R', 'S.' ]
	// stack:  [ 'Q., 'R' ]
	// stack:  [ 'Q., 'R.', 'T', 'U', 'V' ]
	// stack:  [ 'Q., 'R.', 'T', 'U', 'V.' ]
	// stack:  [ 'Q., 'R.', 'T', 'U' ]
	// stack:  [ 'Q., 'R.', 'T', 'U.', 'W' ]
	// stack:  [ 'Q., 'R.', 'T', 'U.', 'W.' ]
	// stack:  [ 'Q., 'R.', 'T', 'U.' ]
	// stack:  [ 'Q., 'R.', 'T' ]
	// stack:  [ 'Q., 'R.', 'T.' ]
	// stack:  [ 'Q., 'R.' ]
	// stack:  [ 'Q. ]
	// null
}

//*************RECURSIVE********************//
if (!process.argv[2] || process.argv[2] == "recursive") {

	console.log("\n-- expect node U --");
	console.log(myTree.depthFirstSearchRecursive('U'));
	// processing  Q
	// processing  R
	// processing  T
	// finished  T
	// processing  U
	// { key: 'U', children: [ { key: 'W', children: [] } ] }


	console.log("\n-- expect node W --");
	console.log(myTree.depthFirstSearchRecursive('W'));
	// processing  Q
	// processing  R
	// processing  T
	// finished  T
	// processing  U
	// processing  W
	// { key: 'W', children: [] }


	console.log("\n-- expect null --");
	console.log(myTree.depthFirstSearchRecursive('Z'));
	// processing  Q
	// processing  R
	// processing  T
	// finished  T
	// processing  U
	// processing  W
	// finished  W
	// finished  U
	// processing  V
	// finished  V
	// finished  R
	// processing  S
	// finished  S
	// finished  Q
	// null
}

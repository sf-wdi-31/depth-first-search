// This object type represents a tree
// where each node has an array of children.

var TreeNode = function (key, children){
	this.key = key; 	
	this.children = children || [];	// an array, holds the TreeNodes that we can go to directly from here
};

// Searches through tree for a single node whose key is equal to
// the +target_key+ param. Looks through nodes in a depth-first order,
// by following each path as deep as it can before backtracking.
// Returns null if no such node is found.
TreeNode.prototype.depthFirstSearch	= function(targetKey) {
	var stack = [{node: this, visited: false}];
	var current;

	var addChildToStack = function(child){
		stack.push({node: child, visited: false});
	};

	while (stack.length !== 0) {
		// print out key of each node in queue to help with debugging
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



// Searches through all nodes of the tree, spreading 
// outward from the root. Looks for any node with key equal
// to the targetKey param. Returns null if no such node is found.
TreeNode.prototype.breadthFirstSearch = function(targetKey){
	// set up the queue of nodes to check 
	var queue = [this]; 
	var current;
	while (queue.length !== 0){
		// print out key of each node in queue to help with debugging
		console.log("queue: ", queue.map(function(node){
			return node.key;
		}));

		current = queue.shift(); // remove and return first element of array

		// check if current node key matches the target key
		if (current.key == targetKey){
			return current;
		} else {
			if (current.children){
				queue = queue.concat(current.children);
			}
		}
	}
	// we've gone through the entire tree without finding the key
	return null;
};


// Return all nodes for which the selectionFunction returns true.
TreeNode.prototype.breadthFirstSearchAll = function(selectionFunction){
	// set up the queue of nodes to check 
	var queue = [this]; 
	// set up output array of nodes that match properties
	var output = [];
	var current;
	while (queue.length !== 0){
		// print out key of each node in queue to help with debugging
		console.log("queue: ", queue.map(function(node){
			return node.key;
		}));

		current = queue.shift(); // remove and return first element of array

		// check if selectionFunction returns true for current node 
		if (selectionFunction(current)){
			output.push(current);
		} else {
			if (current.children){
				queue = queue.concat(current.children);
			}
		}
	}
	return output;
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

console.log("\n-- expect node U --");
console.log(myTree.depthFirstSearchPath('U'));  
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
console.log(myTree.depthFirstSearchPath('W'));  
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
console.log(myTree.depthFirstSearchPath('Z')); 
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



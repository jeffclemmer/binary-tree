class BinaryTree {
  // private class properties
  #tree = {}
  
  constructor (tree) {
    if (tree != undefined) {
      this.#tree = tree;
    } else {
      // start with empty tree
      this.#tree = {
        d: 0,
        l: null,
        r: null,
      }
    }
  }
  
  // getters and setters
  get tree() {
    return this.#tree;
  }
  
  setTree(tree) {
    this.#tree = tree;
  }
  
  
  // methods
  
  // insert value into empty key
  insert(value) {
    
    // traverse tree and find an empty leaf node
    
    let queue = [this.#tree];
    
    while (queue.length > 0) {
      
      // pop a node from the queue
      let node = queue.shift();
      
      // check left node
      if (node.l != null) {
        // node has a value, push it on to the queue
        queue.push(node.l);
      } else {
        // node does not have a value, add a new object
        node.l = { d: value, l: null, r: null };
        
        return this.#tree;
      }
      
      // check right node
      if (node.r != null) {
        // node has a value, push it on to the queue
        queue.push(node.r);
      } else {
        // node does not have a value, add a new object
        node.r = { d: value, l: null, r: null };
        
        return this.#tree;
      }
      
    }
    
  }
  
  
  // delete a value and replace it with the deepest and most right value we can find
  delete(value) {
    
    let queue = [this.#tree];
    
    // a reference to the node that we want to delete/replace
    let toReplace = null;
    
    // find the value to delete
    
    // traverse the tree
    while (queue.length > 0) {
      
      // pop a node from the queue
      let node = queue.shift();
      
      if (node.d == value) {
        // take a reference to this node for later
        toReplace = node;
      } else {
        if (node.l != null) queue.push(node.l);
        if (node.r != null) queue.push(node.r);
      }
      
    }
    
    // did we find a value to replace?
    if (toReplace != null) {
      /*       
      we need to save parent and prop for deletion purposes.
      we have a reference to properties of a parent, but
      not to the parent.  essentially we can't do parent = null,
      we need to do parent[prop] = null
      */      
      queue = [{node: this.#tree, parent: null, prop: ""}];
      
      
      // we want to find the right most value using this queue loop.
      // we always want to check for "right" first, but if that is null, then
      // we go "left"
      
      // traverse the tree
      while (queue.length > 0) {
        
        // pop a node from the queue
        let node = queue.shift();
        
        // do we need to stop?
        if (node.node.r == null && node.node.l == null) {
          
          // replace toReplace node value with current node value
          toReplace.d = node.node.d;
          
          // replace current node with null
          node.parent[node.prop] = null;
          
          return;
          
        } else {
          
          // if right node is not null
          if (node.node.r != null) {
            queue.push({node: node.node.r, parent: node.node, prop: "r"});
          } else if (node.node.l != null) {
            queue.push({node: node.node.l, parent: node.node, prop: "l"});
          }
        }
      }
      
    } else {
      return;
    }
    
  }
  
  /*   
  invert/mirror the tree - this inverts the tree from left to right and right to left
  
  from:
      7
     / \
    4   2
  
  to
      7
     / \
    2   4
  */
  
  invert() {
    
    let queue = [this.#tree];
    
    while (queue.length > 0) {
      // shift a node from the queue
      let node = queue.shift();
      
      // swap the nodes
      let nt = node.r;
      node.r = node.l;
      node.l = nt;
      
      if (node.l != null) {
        queue.push(node.l);
      }
      if (node.r != null) {
        queue.push(node.r);
      }
      
    }
    
  }
  
  
  // decends through the tree and counts all nodes and leaf nodes
  metrics() {
    let queue = [this.#tree];
    
    let totalNodes = 0;
    let leafNodes = 0;
    
    while (queue.length > 0) {
      // shift a node from the queue
      let node = queue.shift();
      
      totalNodes++;
      
      if (node.l == null && node.r == null) {
        leafNodes++;
      }
      
      if (node.l != null) {
        queue.push(node.l);
      }
      if (node.r != null) {
        queue.push(node.r);
      }
    }
    
    return { leafNodes: leafNodes, totalNodes: totalNodes };
  }
  
}


module.exports = BinaryTree;
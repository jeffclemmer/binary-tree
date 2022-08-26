const BinaryTree = require("./BinaryTree.js");

test("empty constructor", () => {
  expect(new BinaryTree().tree).toEqual({d: 0, l: null, r: null});
});


/* 
the json tree below looks like this:
          1
         / \
        /    \
       /       \
      7          9
     / \        /
    2   6      9
       / \    /
      5   11 5

*/
// v = value, l = left, r = right
const tree = {
  d: 1,
  l: {
    d: 7,
    l: {
      d: 2,
      l: null,
      r: null,
    },
    r: {
      d: 6,
      l: {
        d: 5,
        l: null,
        r: null,
      },
      r: {
        d: 11,
        l: null,
        r: null,
      },
    },
  },
  r: {
    d: 9,
    l: {
      d: 9,
      l: {
        d: 5,
        l: null,
        r: null,
      },
      r: null,
    },
    r: null,
  }
}

// compact version of tree above
// let tree = {"v":1,"l":{"v":7,"l":{"v":2,"l":null,"r":null},"r":{"v":6,"l":{"v":5,"l":null,"r":null},"r":{"v":11,"l":null,"r":null}}},"r":{"v":9,"l":{"v":9,"l":null,"r":null},"r":null}}

// console.log("tree:", JSON.stringify(tree));

test("full constructor", () => {
  // console.log("tree:", tree);
  expect(new BinaryTree(tree).tree).toEqual(tree);
});


/* 
after the following operation, the json tree below looks like this:
          1
         / \
        /    \
       /       \
      7          9
     / \        / \
    2   6      9  22
       / \    / 
      5   11 5  

*/

test("insert new value into tree", () => {
  let bt = new BinaryTree(tree);
  bt.insert(22);

  expect(bt.tree).toEqual({
    "d": 1,
    "l": {
      "d": 7,
      "l": {
        "d": 2,
        "l": null,
        "r": null
      },
      "r": {
        "d": 6,
        "l": {
          "d": 5,
          "l": null,
          "r": null
        },
        "r": {
          "d": 11,
          "l": null,
          "r": null
        }
      }
    },
    "r": {
      "d": 9,
      "l": {
        "d": 9,
        "l": {
          "d": 5,
          "l": null,
          "r": null
        },
        "r": null
      },
      "r": {
        "d": 22,
        "l": null,
        "r": null
      }
    }
  });
});


/* 
after the following operation, the json tree below looks like this:
          1
         / \
        /    \
       /       \
      22         9
     / \        /
    2   6      9
       / \    /
      5   11 5

*/
test("delete value and replace with deepest and most right value", () => {
  let bt = new BinaryTree(tree);
  bt.delete(7);

  expect(bt.tree).toEqual({
    "d": 1,
    "l": {
      "d": 22,
      "l": {
        "d": 2,
        "l": null,
        "r": null
      },
      "r": {
        "d": 6,
        "l": {
          "d": 5,
          "l": null,
          "r": null
        },
        "r": {
          "d": 11,
          "l": null,
          "r": null
        }
      }
    },
    "r": {
      "d": 9,
      "l": {
        "d": 9,
        "l": {
          "d": 5,
          "l": null,
          "r": null
        },
        "r": null
      },
      "r": null
    }
  });
});

test("mirror/invert tree simple", () => {
  let bt = new BinaryTree({
    d: 7,
    l: {d: 4, l: null, r: null},
    r: {d: 2, l: null, r: null},
  });
  bt.invert();
  expect(bt.tree).toEqual({
    "d": 7,
    "l": {
      "d": 2,
      "l": null,
      "r": null
    },
    "r": {
      "d": 4,
      "l": null,
      "r": null
    }
  });
});


/* 
after the following operation, the json tree below looks like this:
          1
         / \
        /    \
       /       \
      22         9
     / \        /
    2   6      9
       / \    /
      5   11 5

          1
         / \
       /    \
     /       \
   9         22
    \       /  \
     9     6    2
      \   / \
       5 11  5
*/

test("invert/mirror tree complex", () => {
  let bt = new BinaryTree(tree);
  bt.invert();
  expect(bt.tree).toEqual({
    "d": 1,
    "l": {
      "d": 9,
      "l": null,
      "r": {
        "d": 9,
        "l": null,
        "r": {
          "d": 5,
          "l": null,
          "r": null
        }
      }
    },
    "r": {
      "d": 22,
      "l": {
        "d": 6,
        "l": {
          "d": 11,
          "l": null,
          "r": null
        },
        "r": {
          "d": 5,
          "l": null,
          "r": null
        }
      },
      "r": {
        "d": 2,
        "l": null,
        "r": null
      }
    }
  });
});

/* 
counts totalNodes and leafNodes
          1
         / \
       /    \
     /       \
   9         22
    \       /  \
     9     6    2
      \   / \
       5 11  5

*/

test("tree metrics", () => {
  let bt = new BinaryTree(tree);
  let metrics = bt.metrics();
  expect(metrics).toEqual( { leafNodes: 4, totalNodes: 9 } );
});
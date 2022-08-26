# Simple Javascript Binary Tree

Simple Binary Tree implementation with testing coverage.

This is implemented as a single Javascript class.  

Implements the classic Binary Tree with three methods (so far).

Something I wanted to exclude from this library is recursion.  I'm not a huge fan of recursion, because I feel like I have less control over the code that is being ran.  This library uses iterables instead.

## Running Tests

First, clone the repo to your system and run:
```
npm i
```

To test, run:
```
npm test
```

## API
The API looks like this:

**Constructor Emtpy**
```
const bt = new BinaryTree()
```

**Constructor Filled**
```
const bt = new BinaryTree({binary tree})
```

**Methods**
```
insert(value)
delete(value)
invert()
```

**Insert**

> insert(value)

Insert traverses the tree and adds a value at an empty node.

**Delete**
> delete(value)

Delete traverses the tree and deletes the _first_ value it finds.  If you have multiple values stored, you'll need to use delete again.

**Invert**
> invert()

Invert will invert or mirror the tree.  A simple example is:
```
from:
    7
   / \
  4   2

to
    7
   / \
  2   4

```

## How A Tree Is Represented

A tree is represented in standard JSON object notation.  It uses the following structure to represent it's nodes:

```
let tree = {
  // root node
  d: data or value,
  l: left node,
  r: right node,
}
```

Here's a simple example of what a tree looks like in practice.

The visual representation of the tree looks like:

```
    7
   / \
  4   2
```
is represented with JSON notation:
```
let tree = {
  d: 7,
  l: {d: 4, l: null, r: null},
  r: {d: 2, l: null, r: null},
}
```

## Notes About Implementation

**Motivations**

This library is very early and I don't have any particular plans for it.  I just wanted to shift gears from the various professional projects I've been working on and work on some code puzzles.  I may add more methods later...

**Traversal**

There are many different styles of traversal.  This library only implements one style.  **Inorder** traversal is what is implemented.  However, in the **Delete** method, I've implemented a few different types of traversal to satisfy standard requirements for moving then deleting nodes.

## Things I'd Like To Pursue

I'd like to add tree size (done), a delete that will remove all values found, inserting smaller to bigger values left to right (ordering), tree flattening and ordering, and more tests.


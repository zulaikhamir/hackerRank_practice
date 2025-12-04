// A level-order traversal, also known as a breadth-first search, visits each level of a tree's nodes from left to right, top to bottom. You are given a pointer, root, pointing to the root of a binary search tree. Complete the levelOrder function provided in your editor so that it prints the level-order traversal of the binary search tree.

// Hint: You'll find a queue helpful in completing this challenge.
static void levelOrder(Node root) {

    // If the tree is empty, there is nothing to print
    if (root == null) {
        return;
    }

    // We use a Queue for Breadth-First Search (BFS).
    // BFS processes nodes level by level.
    Queue<Node> queue = new LinkedList<>();

    // Start by adding the root node to the queue.
    queue.add(root);

    // Continue until all nodes have been processed.
    while (!queue.isEmpty()) {

        // Remove the node at the front of the queue.
        // This is the current node we are visiting.
        Node current = queue.poll();

        // Print the value of the current node.
        // BFS prints nodes in the order they are visited.
        System.out.print(current.data + " ");

        // If the current node has a left child,
        // add it to the queue to be processed later.
        if (current.left != null) {
            queue.add(current.left);
        }

        // If the current node has a right child,
        // add it to the queue as well.
        if (current.right != null) {
            queue.add(current.right);
        }
    }
}

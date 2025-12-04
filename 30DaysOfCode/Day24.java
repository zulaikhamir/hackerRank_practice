// A Node class is provided for you in the editor. A Node object has an integer data field, , and a Node instance pointer, , pointing to another node (i.e.: the next node in a list).

// A removeDuplicates function is declared in your editor, which takes a pointer to the  node of a linked list as a parameter. Complete removeDuplicates so that it deletes any duplicate nodes from the list and returns the head of the updated list.

// Note: The  pointer may be null, indicating that the list is empty. Be sure to reset your  pointer when performing deletions to avoid breaking the list.
public static Node removeDuplicates(Node head) {

    // If the list is empty or has only one node, no duplicates exist
    if (head == null) {
        return head;
    }

    Node current = head;  // Start from the head of the list

    // Traverse until we reach the last node
    while (current.next != null) {

        // Check if current node and next node have the same value
        if (current.data == current.next.data) {
            // Duplicate found → skip the next node
            current.next = current.next.next;
        } else {
            // No duplicate → move to the next node
            current = current.next;
        }
    }

    return head;  // Return the updated list
}

// The height of a binary search tree is the number of edges between the tree's root and its furthest leaf. You are given a pointer, root, pointing to the root of a binary search tree. Complete the getHeight function provided in your editor so that it returns the height of the binary search tree.



	public static int getHeight(Node root){
      //Write your code here
      if(root==null){
        return -1;
      }
      int leftHeight= getHeight(root.left);
      int rightHeight= getHeight(root.right);
      return 1 + Math.max(leftHeight,rightHeight);

    }

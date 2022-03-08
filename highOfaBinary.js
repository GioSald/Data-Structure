
function maxDepth(root){
    if(root === null){
        return 0
    }

    let maxHeight = 1;

    let traverse = (root, level) => {
        if(root.left){traverse(root.left, level + 1)}
        if(root.right){traverse(root.right, level + 1)}

        maxHeight = Math.max(level, maxHeight)
    }
    traverse(root,1)
    return maxHeight
}
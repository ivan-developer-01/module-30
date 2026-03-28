// Binary tree implementation (from https://codepen.io/ytokarevskaya/pen/abOybYE)
class BinaryNode<T = any> {
	public left: BinaryNode | null;
	public right: BinaryNode | null;
	constructor(public value: T) {
		this.left = null;
		this.right = null;
	}
}

class BinaryTree<T = any> {
	public root: BinaryNode<T>;
	public count: number;
	constructor(value: T) {
		this.root = new BinaryNode<T>(value);
		this.count = 1;
	}

	size() {
		return this.count;
	}

	insert(value: T) {
		this.count++;

		const newNode = new BinaryNode<T>(value);
		const searchTree = (node: BinaryNode<T>) => {
			if (value < node.value) {
				if (!node.left) {
					node.left = newNode;
				} else searchTree(node.left);
			} else if (value > node.value) {
				if (!node.right) {
					node.right = newNode;
				} else searchTree(node.right);
			}
		}

		searchTree(this.root);
	}

	min() {
		let currentNode = this.root;

		while (currentNode.left) {
			currentNode = currentNode.left;
		}

		return currentNode.value;
	}

	max() {
		let currentNode = this.root;

		while (currentNode.right) {
			currentNode = currentNode.right;
		}

		return currentNode.value;
	}

	contains(value: T) {
		let currentNode: BinaryNode<T> | null = this.root;
		while (currentNode) {
			if (value === currentNode.value) {
				return true;
			}

			if (value < currentNode.value) {
				currentNode = currentNode.left;
			} else {
				currentNode = currentNode.right;
			}
		}

		return false;
	}

	dfsInOrder() {
		const result: T[] = [];

		const traverse = (node: BinaryNode<T>) => {
			if (node.left) traverse(node.left);
			result.push(node.value);
			if (node.right) traverse(node.right);
		}

		traverse(this.root);
		return result;
	}

	dfsPreOrder() {
		const result: T[] = [];

		const traverse = (node: BinaryNode<T>) => {
			result.push(node.value)
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
		}

		traverse(this.root);

		return result;
	}

	dfsPostOrder() {
		const result: T[] = [];

		const traverse = (node: BinaryNode<T>) => {
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
			result.push(node.value)
		}

		traverse(this.root);

		return result;
	}
}

const tree = new BinaryTree(15);
tree.insert(3);
tree.insert(36);
tree.insert(2);
tree.insert(12);
tree.insert(28);
tree.insert(39);

console.log(tree.size());

console.log(tree.min());
console.log(tree.max());

console.log(tree.contains(2));
console.log(tree.contains(9));


console.log(tree.dfsInOrder());
console.log(tree.dfsPreOrder());
console.log(tree.dfsPostOrder());
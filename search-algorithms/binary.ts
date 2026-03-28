export default function binarySearch<T = any>(array: T[], value: T) {
	let firstIndex = 0;
	let lastIndex = array.length - 1;
	let result = -1;

	while (firstIndex <= lastIndex) {
		let middleIndex = Math.round((firstIndex + lastIndex) / 2);
		let middleItem = array[middleIndex];
		if (middleItem === value) {
			result = middleIndex;
			break;
		}
		else if (middleItem < value) firstIndex = middleIndex + 1;
		else if (middleItem > value) lastIndex = middleIndex - 1;
	}

	return result;
}

console.log(binarySearch([2, 4, 8, 10, 15, 18, 21, 22, 48], 22));
console.log(binarySearch([2, 4, 8, 10, 15, 18, 21, 22, 48], 21));
console.log(binarySearch([2, 4, 8, 10, 15, 18, 21, 22, 48], 210));
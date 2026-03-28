// Mergesort implementation from https://codepen.io/ytokarevskaya/pen/YzXxQrj?editors=0012
// I added static typing. Variable names and code formatting may be slightly modified.
function merge<T = any>(arrFirst: T[], arrSecond: T[]) {
	const arrSort: T[] = [];
	let i = 0, j = 0;
	while (i < arrFirst.length && j < arrSecond.length) {
		arrSort.push(
			(arrFirst[i] < arrSecond[j]) ?
				arrFirst[i++] : arrSecond[j++]
		);
	}

	return [
		...arrSort,
		...arrFirst.slice(i),
		...arrSecond.slice(j)
	];
}

export default function mergeSort<T = any>(array: T[]): T[] {
	if (array.length <= 1) return array;
	const middle = Math.floor(array.length / 2);
	const arrayLeft = array.slice(0, middle);
	const arrayRight = array.slice(middle);
	return merge(mergeSort(arrayLeft), mergeSort(arrayRight));
}

const array = [8, 15, 3, 4, 18, 34, 45, 108, 13];
console.log(mergeSort(array));
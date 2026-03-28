export default function linearSearch<T = any>(array: T[], value: T) {
	let result = -1;

	array.forEach((element, index) => {
		if (value === element) {
			result = index;
		}
	});

	return result;
}

const array = [15, 8, 10, 22, 4, 2];
console.log(linearSearch(array, 22));
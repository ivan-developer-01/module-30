export function unconventionalCombinationSum(array: number[], target: number) {
	let set = new Set<string>();
	for (const a of array) {
		for (const b of array) {
			let sum = a + b;
			if (sum === target) {
				if (a >= b) set.add(`${a} ${b}`)
				else set.add(`${b} ${a}`);
			}
		}
	}

	return Array.from(set.entries()).map(([value]) => value.split(" ").map(Number));
}

export function slowBadComplexCombinationSum(array: number[], target: number) {
	const result: number[][] = [];

	for (const a of array) {
		for (const b of array) {
			if (a + b === target) result.push([a, b]);
		}
	}

	return result;
}

export default combinationSum;
// Original solution by someone else, with only type annotations added.
function combinationSum(candidates: number[], number: number) {
	let result: number[][] = [], selectedList: number[] = [];

	for (let i = 0; i < candidates.length; i++) {
		let curNum = candidates[i];
		let diff = number - curNum;

		if (selectedList.includes(diff) || diff === curNum) {
			result.push([curNum, diff]);
		}

		selectedList.push(curNum);
	}

	return result;
}

console.log(combinationSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10));
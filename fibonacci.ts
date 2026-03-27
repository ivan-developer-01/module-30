const doRecursive = false;
export function fibonacciRecursive(n: number): number {
	if (n <= 1) return n;
	return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

const doCyclic = true;
export function fibonacciCyclic(n: number) {
	let a = 1, b = 1, c: number = n;

	for (let i = 2; i <= n; i++) {
		c = a + b;
		a = b;
		b = c;
	}

	return c;
}

if (doRecursive) for (let i = 0; i <= 10; i++) { console.log(`fibonacciRecursive, ${i}:`, fibonacciRecursive(i)); }
if (doCyclic) {
	for (let i = 0; i <= 10; i++) { console.log(`fibonacciCyclic, ${i}:`, fibonacciCyclic(i)); }
	console.log(`fibonacciCyclic, 60:`, fibonacciCyclic(60));
}
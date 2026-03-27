const doRecursive = false;
export default function fibonacciRecursive(n: number): number {
	if (n <= 1) return n;
	return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

if (doRecursive) for (let i = 0; i <= 10; i++) { console.log(`fibonacciRecursive, ${i}:`, fibonacciRecursive(i)); }
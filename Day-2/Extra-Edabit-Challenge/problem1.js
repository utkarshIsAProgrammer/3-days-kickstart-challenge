// Create a function which returns the number of true values there are in an array.

// Note:
// Return 0 if given an empty array.
// All array items are of the type bool (true or false).

function countTrue(arr) {
	let trueCount = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == true) {
			trueCount += 1;
		}
	}
	return trueCount;
}

let output = countTrue([true, false, true, true, true, false]);
console.log(output);

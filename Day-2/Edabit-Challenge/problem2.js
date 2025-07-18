// Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).

// Note:
// n will always be greater than 2.
// The formula (n - 2) x 180 gives the sum of all the measures of the angles of an n-sided polygon.

function sumPolygon(n) {
	let sum_of_angles = (n - 2) * 180;
	return sum_of_angles;
}

let output = sumPolygon(3);
console.log(output);

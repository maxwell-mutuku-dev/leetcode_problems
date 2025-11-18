function understandBits(bits) {
	// Determine the length of the list
	// Reverse the list
	// For every item in the list, raise 2 to the power of the index, and multiply it
	// with the current item in the list
	// Add that to the cumulative sum giving the number
	const reversedBits = bits.reverse();
	var sum = 0;
	var listLength = reversedBits.length;
	for (var i = 0; i < listLength; i++) {
		var raisedTwo = 2 ** i;
		var resolvedValue = raisedTwo * reversedBits[i];
		sum = resolvedValue + sum;
	}
	return sum;
}
console.log(understandBits([1, 1, 1, 0]));

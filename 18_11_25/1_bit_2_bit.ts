function isOneBitCharacter(bits: number[]): boolean {
	/**
        read bits
        if character at bit[i] === 0,
        then we need to increment our pointer by 1
        else
        we increment by two
        all the while checking if we are at index bits.length - 1 
     */

	const bitsLength = bits.length;

	for (let i = 0; i < bitsLength; i++) {
		// test if we are almost to the end of the list
		if (i === bitsLength - 1) {
			return true;
		}

		// if current character is a zero, increment the value of the pointer by 1
		if (bits[i] === 0) {
			continue;
		} else {
			i = i + 1;
		}
		// else do nothing
	}

	return false;
}

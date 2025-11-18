717. 1-bit and 2-bit Characters
     Easy
     Topics
     premium lock iconCompanies
     Hint

We have two special characters:

    The first character can be represented by one bit 0.
    The second character can be represented by two bits (10 or 11).

Given a binary array bits that ends with 0, return true if the last character must be a one-bit character.

Example 1:

Input: bits = [1,0,0]
Output: true
Explanation: The only way to decode it is two-bit character and one-bit character.
So the last character is one-bit character.

Example 2:

Input: bits = [1,1,1,0]
Output: false
Explanation: The only way to decode it is two-bit character and two-bit character.
So the last character is not one-bit character.

Constraints:

    1 <= bits.length <= 1000
    bits[i] is either 0 or 1.

# Number [] vs number []

The distinction between number[] and Number[] is primarily relevant in TypeScript, where it concerns the type of elements within an array.
number[]

    This represents an array where each element is of the primitive number type in TypeScript.
    In JavaScript, number is a primitive data type used for both integers and floating-point numbers.
    This is the standard and generally preferred way to type arrays of numbers in TypeScript.

Number[]

    This represents an array where each element is an instance of the Number object wrapper.
    In JavaScript, Number is a built-in object constructor that can be used to create Number objects (e.g., new Number(5)).
    While Number objects can behave similarly to primitive number values in many contexts due to JavaScript's type coercion, they are technically objects.
    Using Number[] is less common and generally discouraged in most TypeScript applications, as it can lead to subtle differences in behavior compared to primitive number values and is often unnecessary.

# Solution

Approach 1: Increment Pointer
Intuition

When reading from the i-th position, if bits[i] == 0, the next character must be at i + 1, because 0 is 1-bit; else if bits[i] == 1, the next character must be at i + 2, because 1 is only present in 2-bit characters 10 and 11. We increment our read-pointer i to the start of the next character appropriately. At the end, if our pointer is at bits.length - 1, then the last character must have a size of 1 bit.

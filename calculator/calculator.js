function add (num1, num2) {
	return num1 + num2;	
}

function subtract (num1, num2) {
	return num1 - num2;
}

function sum (nums) {
	let result = 0;
	if (nums.length) {
		result = nums.reduce((acc, num) => {
			return acc + num;
		},0);
	}
	return result;
}

function multiply (nums) {
	let result = 0;
	if (nums.length) {
		result = nums.reduce((acc, num) => {
			return acc * num;
		},1);
	}
	return result;
}

function power(num, exponent) {
	return Math.pow(num, exponent);
}

function factorial(num) {
	if (num === 0) return 1;
	let nums = [];
	let result = 0;
	for (i = 1; i <= num; i++) {
		nums.push(i);
	}
	if (nums.length) {
		result = nums.reduce((acc, num) => {
			return acc*num;
		},1);
	}
	return result;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
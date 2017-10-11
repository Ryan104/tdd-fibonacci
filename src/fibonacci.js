/* global define */

    /**
     * @description Calculate any number in the Fibonacci sequence.
     * @param {Number} n The index of the sequence to calculate; zero-based.
     * @returns {Number} the nth element of the Fibonacci sequence.
     */

function fibonacci(index){
	if (index < 0 || typeof index !== 'number'){
		return 0;
	}
	if (index === 0 || index === 1){
		return 1;
	} else {
		return fibonacci(index - 1) + fibonacci(index - 2);
	}
}

module.exports = fibonacci;
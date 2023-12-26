function findIndicesSum(nums, target) {
	let left = 0;
	let right = nums.length - 1;

	while (left < right) {
		let currentSum = nums[left] + nums[right];

		if (currentSum === target) {
			return [left, right];
		} else if (currentSum < target) {
			left++;
		} else {
			right--;
		}
	}

	//if nothing is found , then null
	return null;
}

const numbers = [1, 2, 4, 7, 11, 15];
const targetSum = 15;

const result = findIndicesSum(numbers, targetSum);

if (result) {
	console.log(`Indices with values ${targetSum}: [${result}]`);
} else {
	console.log(`No Indices found with values ${targetSum}`);
}

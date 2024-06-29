export default function runningSum(nums: number[]) {
  // code here

  if (
    !Array.isArray(nums) ||
    nums.some((n) => {
      return typeof n !== "number" || !Number.isInteger(n);
    })
  )
    throw new Error("Error");

  let prefixSum: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    prefixSum[i] = i ? prefixSum[i - 1] + nums[i] : nums[i];
  }

  return prefixSum;
}

console.log(runningSum([1, 2, 3, 6]));

// npx tsx <file>.ts

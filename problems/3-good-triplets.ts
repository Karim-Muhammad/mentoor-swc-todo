function isPositive(number: number) {
  return number >= 0;
}

export default function countGoodTriplets(
  nums: number[],
  a: number,
  b: number,
  c: number
): number {
  if (
    nums.length < 3 ||
    nums.some((n) => n < 0) ||
    !isPositive(a) ||
    !isPositive(b) ||
    !isPositive(c)
  )
    throw new Error("Error");

  const triplets: number[][] = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (
          Math.abs(nums[i] - nums[j]) <= a &&
          Math.abs(nums[j] - nums[k]) <= b &&
          Math.abs(nums[i] - nums[k]) <= c
        )
          triplets.push([nums[i], nums[j], nums[k]]);
      }
    }
  }

  //   console.log("array ", triplets);
  return triplets.length;
}

console.log(countGoodTriplets([3, 0, 1, 1, 9, 7], 7, 2, 3));

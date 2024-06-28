export default function indexOfNeedleInHaystack(
  haystack: string,
  needle: string
): number {
  // Function implementation here
  if (typeof haystack !== "string" || typeof needle !== "string")
    throw new Error("Error");
  if (needle.length > haystack.length) throw new Error("Error");

  const needleLength = needle.length;
  const haystackLength = haystack.length;
  let count = 0;

  for (let i = 0; i < haystackLength; i++) {
    if (haystack[i] !== needle[count]) {
      i--;
    } else {
      count++;
    }

    if (count === needleLength) {
      return i - count + 1;
    }
  }

  // Return
  return -1;
}

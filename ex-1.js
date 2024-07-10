function twoSum(numbers, target) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] == target) {
        result.push(i);
        result.push(j);
        console.log("result:", result);
        return result;
      }
    }
  }
  console.log("result:", result);
  return result;
}

numbers = [2, 7, 11, 15];

twoSum(numbers, 236);

// Majority Element
const majorityElement = function(nums) {
  let count = 1;
  let m = 0;
  let item;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (nums[i] == nums[j])
      m++;
      if (count < m) {
        count = m;
        item = nums[i];
      }
    }
    m = 0;
  }
  if (item) {
    return item
  } else {
    return nums[0]
  }
};
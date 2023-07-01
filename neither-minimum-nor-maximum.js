// Neither Minimum nor Maximum
const findNonMinOrMax = function(nums) {
  const maxInt = nums.indexOf(Math.max(...nums));
  const minInt = nums.indexOf(Math.min(...nums));

  let list = [];
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] !== nums[maxInt] && nums[i] !== nums[minInt]) {
      list.push(nums[i]);
    }
  }
  if(list.length === 0) {
    return -1
  }
  return list[0]
};
// Two Sum
const twoSum = function(nums, target) {
  const ls = []
  for(let i = 0; i<nums.length; i++) {
    for(let j = i + 1; j < nums.length; j++) {
      if(nums[i] + nums[j] == target){
        ls.push(i, j);
      };
    };
  };
  return ls;
};
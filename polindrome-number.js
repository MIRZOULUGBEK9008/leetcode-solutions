// Palindrome Number
const isPalindrome = function(x) {
  const xOrg = x;
  let  reversed = 0;
  if(x < 0) {
    return false
  } else {
    while(x) {
      reversed = reversed * 10 + (x % 10);
      x = parseInt(x / 10);
    };
    if(reversed == xOrg) {
      return true
    } else {
      return false
    };
  };
};
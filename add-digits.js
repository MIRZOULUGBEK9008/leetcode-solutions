// Add Digits
const addDigits = function(num) {
  while(num > 9) {
    num = getSum(num)
  }
  return num;
};

function getSum(n) {
  if (n === 0) {
    return 0;
  } else {
    return (n % 10) + getSum(parseInt(n / 10));
  }
}
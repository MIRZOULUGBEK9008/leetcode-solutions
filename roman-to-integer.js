// Roman to Integer
const romanToInt = function(s) {
  let count = 0;
  const romanNumber = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  }

  for(let i = 0; i < s.length; i++) {
    if(i + 1 < s.length) {
      if(romanNumber[s.charAt(i)] < romanNumber[s.charAt(i + 1)]) {
        count -= romanNumber[s.charAt(i)]
      } else {
        count += romanNumber[s.charAt(i)]
      }
    } else {
      count += romanNumber[s.charAt(i)]
    }
  }
  return count
};
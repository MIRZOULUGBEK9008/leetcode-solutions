// Length of Last Word

const lengthOfLastWord = function(s) {
  const removeSpace = s.split(" ");
  const emptyArr = [];
  removeSpace.forEach((s) => {
    if(s !== "") {
      emptyArr.push(s);
    };
  });

  return emptyArr.at(-1).length
}
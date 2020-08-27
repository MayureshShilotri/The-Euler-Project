function powerDigitSum(exponent) {
  let numArr = Math.pow(2,exponent).toString().split("");
  let sum = 0;
  for(let i = 0; i < numArr.length; i++) {
    sum += parseInt(numArr[i]);
  }
  return sum;
}

powerDigitSum(15);

//Need to implement this - http://www.cplusplus.com/forum/beginner/23305/#CH_zTmde10437a00

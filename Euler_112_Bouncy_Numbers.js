/*Project Euler: Problem 112: Bouncy numbers
Working from left-to-right if no digit is exceeded by the digit to its left it is called an increasing number; for example, 134468.

Similarly if no digit is exceeded by the digit to its right it is called a decreasing number; for example, 66420.

We shall call a positive integer that is neither increasing nor decreasing a "bouncy" number; for example, 155349.

Clearly there cannot be any bouncy numbers below one-hundred, but just over half of the numbers below one-thousand (525) are bouncy. In fact, the least number for which the proportion of bouncy numbers first reaches 50% is 538.

Surprisingly, bouncy numbers become more and more common and by the time we reach 21780 the proportion of bouncy numbers is equal to 90%.

Find the least number for which the proportion of bouncy numbers is exactly 99%.
*/
// Is number bouncy

// Increment Numerator
// Increment Denominator
// Calculate the metric
// Use while loop to break free


function euler112() {
  var numerator = 99;
  var bouncy = 1;
  var proportion = 0;
  while (proportion < 90) {
    if (isBouncy(numerator)) {
      bouncy++;
      numerator++;
    } else {
      numerator++;
    }
    proportion =  bouncy/numerator*100;
  }
  // answer is still wrong - number is off by 10 or 100 or 1000
  // the starting value for bouncy was 0 - 
  return numerator;
}

function isBouncy(n) {
  let output = [];
  let sNumber = n.toString();
  let ace = false;
  let des = false;
  for (let i = 0, len = sNumber.length; i < len; i += 1) {
      output.push(+sNumber.charAt(i));
  }

  let  j = 0;
  let prev;
  while(j < output.length){
    prev = output[j];
    while(output[++j] > prev) {
      ace = true;
    }
  }

  let  k = 0;
  while(k < output.length){
    prev = output[k];
    while(output[++k] < prev) {
      des = true;
    }
  }
  if (ace && des) {
    return true;
  } else {
    return false;
  }
}
//console.log(isBouncy(143));
console.log(euler112());

// Project Euler: Problem 1: Multiples of 3 and 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Find the sum of all the multiples of 3 or 5 below the provided parameter value number.

function multiplesOf3and5(number) {
  let sumArr = 0;
  for (let i = 0; i < number; i++) {
    if(i % 3 == 0 || i % 5 == 0) {
      sumArr += i;
    }
  }
  console.log(sumArr);
  return sumArr;
}

multiplesOf3and5(1000);
multiplesOf3and5(10) //  should return a number.
multiplesOf3and5(49) // should return 543.
multiplesOf3and5(1000) //  should return 233168.
multiplesOf3and5(8456) // should return 16687353.
multiplesOf3and5(19564) // should return 89301183.

// Results
// 233168
// 23
// 543
// 233168
// 16687353
// 89301183
// [Finished in 1.521s]

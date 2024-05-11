//N1

// let num1 = 1;
// let num2 = 1;

// function Point(num1, num2) {
//   if (num1 < num2) {
//     console.log(-1);
//   } else if (num1 > num2) {
//     console.log(1);
//   } else if (num1 == num2) {
//     console.log(0);
//   }
// }

// Point(num1, num2);

//N2

// let num = 4;

// function Factorial(num) {
//   if (num == 1 || num == 0) {
//     return 1;
//   } else {
//     return num * Factorial(num - 1);
//   }
// }

// let result = Factorial(num);
// console.log(result);

//N3

// let a = "1";
// let b = "2";
// let c = "3";

// function numsSplit(num1, num2, num3) {
//   return a + b + c;
// }

// let result = numsSplit(a, b, c);
// console.log(result);

//N4

// let length = 2;
// let width = 0;

// function rectangle(length, width) {
//   if (length > 0 && width > 0) {
//     return length * width;
//   } else if (length == 0 && width > 0) {
//     return width * width;
//   } else if (length > 0 && width == 0) {
//     return length * length;
//   }
// }

// let result = rectangle(length, width);
// console.log(result);

//N7

// let second = "30";
// let minute = "30";
// let hour = "4";

// function DateNow(second, minute, hour) {
//   return `${hour} : ${minute} : ${second}`;
// }

// let result = DateNow(second, minute, hour);
// console.log(result);

//N8

// let second = 30;
// let minute = 30;
// let hour = 4;

// function SecondsTime(hour, minute, second) {
//   return `${hour * 3600 + minute * 60 + minute} seconds`;
// }

// let result = SecondsTime(hour, minute, second);
// console.log(result);

//N9

// let second = 30;

// function Times(second) {
//   return `${second * 0.000277778} : ${second * 0.01666668} : ${second}`;
// }

// let result = Times(second);
// console.log(result);

//10

let second = 30;
let minute = 30;
let hour = 4;

let second2 = 10;
let minute2 = 12;
let hour2 = 6;

function DifferenceTime(second, second2, minute, minute2, hour, hour2) {
  let num = hour * 3600 + minute * 60 + minute + seconds;
  let num2 = hour2 * 3600 + minute2 * 60 + minute2 + seconds2;

  return `${num2 - num1}`;
}

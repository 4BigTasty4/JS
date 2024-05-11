//N1

// let autoDesc = {
//   manufacturer: "Ford",
//   model: "Mustang",
//   year: 1964,
//   speed: 250,

//   PrintInfo: function () {
//     console.log(
//       `Manufacturer: ${this.manufacturer}; Model: ${this.model}; Year: ${this.year}; Speed: ${this.speed}`
//     );
//   },

//   TimeCalk: function () {
//     let distance = 5750;
//     let time = distance / this.speed;
//     let restTime = time / 4;

//     console.log(`Travel time including stops: ${time + restTime}`);
//   },
// };

// autoDesc.PrintInfo();
// autoDesc.TimeCalk();

//N2

// let math = {
//   numerator: 3,
//   denominator: 5,

//   numerator2: 1,
//   denominator2: 6,

//   Addition: function () {
//     return {
//       numerator:
//         this.numerator * this.denominator2 + this.numerator2 * this.denominator,
//       denominator: this.denominator * this.denominator2,
//     };
//   },

//   Subtraction: function () {
//     return {
//       numerator:
//         this.numerator * this.denominator2 - this.numerator2 * this.denominator,
//       denominator: this.denominator * this.denominator2,
//     };
//   },

//   Multiplication: function () {
//     return {
//       numerator: this.numerator * this.numerator2,
//       denominator: this.denominator * this.denominator2,
//     };
//   },

//   Division: function () {
//     return {
//       numerator: this.numerator * this.denominator2,
//       denominator: this.numerator2 * this.denominator,
//     };
//   },
// };

// console.log(math.Addition());
// console.log(math.Subtraction());
// console.log(math.Multiplication());
// console.log(math.Division());

//N3

let time = {
  seconds: 0,
  minutes: 0,
  hours: 0,

  PrintTime: function () {
    console.log(
      `hour: ${this.hours} ; minute: ${this.minutes} ; second: ${this.seconds} `
    );
  },

  AddSecond: function (seconds) {
    this.seconds += seconds;
    while (this.seconds >= 60) {
      this.seconds -= 60;
      this.minutes++;
    }
    while (this.minutes >= 60) {
      this.minutes -= 60;
      this.hours++;
    }
    this.hours %= 24;
  },

  addMinutes: function (minutes) {
    this.minutes += minutes;
    while (this.minutes >= 60) {
      this.minutes -= 60;
      this.hours++;
    }
    this.hours %= 24;
  },

  addHours: function (hours) {
    this.hours += hours;
    this.hours %= 24;
  },
};

time.hours = 20;
time.minutes = 30;
time.seconds = 45;

time.AddSecond(25);
time.addMinutes(35);
time.addHours(12);
time.PrintTime();

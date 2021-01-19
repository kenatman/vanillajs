const a = 100;
let b = a - 5;

console.log(b, a);

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

console.log(daysOfWeek);
console.log(daysOfWeek[4]);

const nicoInfo = {
  name: "Nico",
  age: 33,
  favMovie: ["Tenet", "Inception", "Interstella"],
  favFood: [
    { name: "Kimchi", taste: "spicy" },
    { name: "Cheese Burger", taste: "no-spicy" },
  ],
};

console.log(nicoInfo.favFood[1].name);

function sayHello(name, age) {
  return `Hi my name is ${name}  Years of ${age}`;
}

const ys = sayHello("Yunsu", 32);
console.log(ys);

const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  times: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
};

const plus = calculator.plus(3, 7);
const minus = calculator.minus(3, 7);
const times = calculator.times(3, 7);
const divide = calculator.divide(3, 7);

console.log(plus);
console.log(minus);
console.log(times);
console.log(divide);

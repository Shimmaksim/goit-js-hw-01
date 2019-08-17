let total = 0;
let input;

// do {
//   input = prompt("Ведите число");
//   input + total;
// } while (input === null);

// alert(`Общая сумма чисел равна ${Number(total) + Number(input)}`);

// // while (input === null) {
// //   alert(`Общая сумма чисел равна ${total + input}`);
// // }

// while (true) {
//   let input = +prompt("Введите число");

//   if (!input) break;

//   total += input;
// }

// alert(`Общая сумма чисел равна ${total}`);

// do {
//   input = prompt("Введите число");
//   if (input !== null) {
//     total += input;
//   }
// } while (total !== null);

// alert(`Общая сумма чисел равна ${total}`);
do {
  input = prompt("Ввведите число");
  if (input !== null) {
    total += Number(input);
  }
} while (input !== null);
alert(`Общая сумма чисел равна ${total}`);

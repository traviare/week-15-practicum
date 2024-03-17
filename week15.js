//Задание 1
// Выведите числа от 1 до 10 в консоль

// for (let i = 0; i < 10; i++) {
//   let number = i + 1;
//   console.log(number);
// }

//Задание 2
// Выведите чётные числа от 1 до 20 в консоль

//   let numberTwo = 0;

//   while (numberTwo <= 20) {
//     console.log(numberTwo);
//     numberTwo += 2;
//   }

//Задание 3
// Выведите числа от 10 до 1 в консоль в обратном порядке

// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

//Задание 4
// Выведите таблицу умножения на 5 от 1 до 10

// for (let i = 1; i <= 10; i++) {
//     let numberFour = i * 5;
//     console.log(numberFour);
// }

//Задание 5
// Вычислить сумму чисел от 1 до 100 и вывести значение в консоль

// let numberFive = 0;

// for (let i = 0; i <= 100; i++) {
//   numberFive += i;
// }
// console.log(numberFive);

//Задание 6
// Выведите все элементы массива в консоль используя цикл for

const array = [1, 2, 3, 4, 5];

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

//Задание 7
// Выведите сумму всех элементов массива используя цикл for

const numbers = [1, 2, 3, 4, 5];
// let taskSeven = 0;

// for (let i = 0; i < numbers.length; i++) {
//   taskSeven += numbers[i];
// }
// console.log(taskSeven);

//Задание 8
// Напишите цикл for, который изменяет массив животных, делая их прекрасными! Например, если есть следующий массив: let animals = ["Кот", "Рыба", "Лемур"]; цикл должен сделать его таким: ["Кот - прекрасное животное", "Рыба - прекрасное животное", "Лемур - прекрасное животное"]
// Подсказка: вам понадобится переприсвоить значения для каждого индекса, то есть присвоить новые значения уже суще- ствующим элементам: animals[0] = animals[0] + " - прекрасное животное";

// const animals = ["Кот", "Рыба", "Лемур"];
// for (let i = 0; i < animals.length; i++) {
//   animals[i] = animals[i] + " - прекрасное животное";
// }
// console.log(animals);

//Задание 9
// Выведите символы в строке в консоль

// const str = "Hello";

// for (let symbol of str) {
//   console.log(symbol);
// }

//Задание 10
// Выведите все элементы массива в консоль используя цикл for...of. Массив array объявлен в Задании 6

// for (let number of array) {
//   console.log(number);
// }

//Задание 11
// Выведите каждое слово из массива строк в консоль
// Подсказка: вам понадобится метод массивов split

// const sentences = ["Hello, world!", "How are you?"];

// for (let i = 0; i < sentences.length; i++) {
//   let a = sentences[i].split(" ");
//   for (let i = 0; i < a.length; i++) {
//     console.log(a[i]);
//   }
// }

//Задание 12
// Выведите сумму всех элементов массива используя цикл for..of. Массив numbers объявлен в Задании 7

// let taskTwelve = 0;

// for (let num of numbers) {
//   taskTwelve += num;
// }

// console.log(taskTwelve);

//Задание 13
// Выведите длину каждого слова из массива строк в консоль

// const list = ["apple", "banana", "cherry"];

// for (let word of list) {
//   console.log(word.length);
// }

//Задание 14
// Преобразуйте массив каждый элемент массива words в верхний регистр

// const words = ["Hello", "world", "!"]; // перенесла массив сюда с 16 задания т.к выдвало ошибку

// for (let word of words) {
//   let a = word.toUpperCase();
//   console.log(a);
// }

//Задание 15
// Подсчитайте количество гласных букв в строке
// Подсказка: вам понадобится метод includes

const greeting = "Hello, world!";
let vowelCount = 0;
const vowels = ["a", "e", "i", "o", "u"];

// for (let word of greeting) {
//   let a = word.toLowerCase();
//   if (vowels.includes(a)) {
//     vowelCount += 1;
//   }
// }
// console.log(vowelCount);

//Задание 16
// Объедините все строки массива в одну строку с пробелами между ними

// let strNew = "";
// for (let word of words) {
//   strNew += ` ${word}`;
// }
// console.log(strNew);

//Задание 17
// Выведите числа от 1 до 10 в консоль используя цикл while

// let taskSeventeen = 0;

// while (taskSeventeen < 10) {
//   taskSeventeen += 1;
//   console.log(taskSeventeen);
// }

//Задание 18
// Выведите числа от 1 до 10 в консоль в обратном порядке используя цикл while

// let taskEighteen = 10;

// while (taskEighteen > 0) {
//   console.log(taskEighteen);
//   taskEighteen--;
// }

//Задание 19
// Проверьте, все ли элементы массива являются положительными числами используя цикл while
// Подсказка: используйте директиву break
const allNumbers = [1, 2, 3, -4, 5];
let allPositive = true;

// let j = 0;

// do {
//   j++;
//   if (allNumbers[j] !== allPositive) {
//     console.log("Не все элементы массива являются положительными числами");
//   }
// } while (j < allNumbers.length);

//Задание 20
// Выведите значения элементов массива до первого отрицательного числа используя цикл do...while
const random = [2, 4, 6, -3, 8, 10];

// let i = 0;
// do {
//   console.log(random[i]);
//   i++;
// } while (random[i] > 0);

//Задание 21
// Выведите числа от 1 до 100, пропуская числа, которые делятся на 3 используя цикл do...while

// let f = 0;
// do {
//   if (f % 3 > 0) {
//     console.log(f);
//   }
//   f++;
// } while (f <= 100);

//Задание 22
// Запросить у пользователя числа, пока сумма введенных чисел не станет больше 100

//Задание 23
// Напишите функцию, которая изменит фоновый цвет всех элементов <h4> на странице на синий цвет

// const headers = document.querySelectorAll("h4");

// for (let header of headers) {
//   header.style.backgroundColor = "#0000FF";
// }

//Задание 24
// Напишите генератор случайных строк до 6 символов
// Подсказка: используйте методы объекта Math и длину массива alphabet
let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
let randomString = "";

// const alphabetArr = alphabet.split("");
// for (let i = 0; i < 6; i++) {
//   randomString += alphabetArr[Math.floor(Math.random() * alphabetArr.length)];
// }

// console.log(randomString);

//Задача 1. Дополните функцию, чтобы она выводила в консоль приветствие пользователю,
//например: "Hello, Igor!"

function sayHello(userName) {
   console.log (`Hello ` + userName)
}

sayHello("Irina");
sayHello("Vlad");
sayHello("Sebastian Novicelli");
sayHello("Volfgang Amadey");
sayHello("Constancia");

//Задача 2. Дополните функцию, чтобы она выводила в консоль отсортированный массив, 
//в котором будут только те цифры, которые кратны 10.
let newArr;
function sortNumbers(arr) { 
    for (let i = 0; i < arr.length; i++) { newArr = arr.filter(i => i % 10 === 0) }
return newArr;

}

console.log(sortNumbers([10, 18, 115, 22, 30, 2000, 7])); //[10, 30, 2000]
console.log(sortNumbers([100, 3, 286, 11, 20, 2001, 14])); //[100, 20]
console.log(sortNumbers([17, 95, 410, 4832, 2, 27])); //[410]


//Задача 3. Напишите функцию, которая принимает 1 параметр - слово, и выводит в консоль
// его длину. Напишите несколько выводов этой функции с разными параметрами, чтобы убедиться,
//что все работает

function showLength (word) {
    console.log (word.length)
}
showLength("apple");
showLength("project");
showLength("assistance");
showLength("sequence");
showLength("screenwriter")
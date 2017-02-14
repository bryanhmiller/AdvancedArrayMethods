var fruit = ["apple", "banana", "cherry"];

// // 1A: Write a funciton called outputFruitOld that consoles

// function outputFruitOld (array) {
// 	for (i = 0; i <array.length; i++)
// 	console.log(array[i]);
// }

// outputFruitOld(fruits);

// function outputFruits (element, index) {
// 	console.log(element);
// 	console.log("array[" + index + "] " + element);
// }

// fruits.forEach(outputFruits);




// fruits.forEach(function(fruit) {
// 	console.log(fruit);
// });
// function backwardFruitsOld(array) {
// 	var backwardFruit = [];
// 	for (i = 0; i < array.lenght; i++){
// 		backwardFruit.push(array[i].split("").reverse()).join("");
// 	}
// 	console.log(backwardFruit);
// }

// backwardFruitsOld(fruit);

// var backwardFruit = fruit.map(function(fruit){
// 	return fruit.split("").reverse().join("");
// });

// console.log(backwardFruit);

function fiveLettersOnlyOld (array){
	var filteredFruits = [];
	for (var i = 0; i < array.length; i++){
		if (array[i].length === 5){
			filteredFruits.push(array[i]);
		}
	}
	console.log(filteredFruits);
}
fiveLettersOnlyOld(fruit);

function filterIt (cat){
	if (cat.length === 5){
		return cat;
	} 
}
var filteredFruits = fruit.filter(filterIt);
console.log(filteredFruits);














var numbers = [0, 1, 2, 3, 4];



function addzOld(array){
	var sum = 0;
	for (var i = 0; i < array.length; i++){
		sum = sum + array[i];
	}
	console.log(sum);
}
addzOld(numbers);



var sum = [0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, index){
	console.log("current index" + index);
	console.log("previousValue", previousValue);
	console.log("currentValue", currentValue);
	return previousValue + currentValue;
});
console.log(sum);




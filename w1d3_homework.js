Week 1, Day 3 Homework

// Write a function to swap two values at two different indicies in an array.
var someArray = ["Manny", "Moe", "Jack"];

var swap = function (arr, itemOne, itemTwo) {
	var temp = arr[itemOne];
	arr[itemOne] = arr[itemTwo];
	arr[itemTwo] = temp;
	
	return arr;
};

// Write a function to generate a random number in a specified range.
var getRand = function (low, high) {
	return Math.random() * (high - low) + low;
};

// Write a function to create a specified number of random numbers from 1 to 100 in an array.
var randArr = function (size) {
	var arr = [];
  for (i = 0; i < size; i++) {
	arr[i] = Math.random() * (100 - 1) + 1;
  }

  return arr; 
}

// Write a function to find the maximum number in an array.
numArr = [1, 2, 3, 7, 8, 9, 20]

function max(arr) {
	max = arr[0];
	for (i = 0; i < arr.length; i++) {
		if (max < arr[i]) {
			max = arr[i];
		}
	}
	return max;
}

// Alternate solution

function max(arr) {
    var currentMax = arr[0];
    arr.forEach(function(element){
        if (element > currentMax) {
            currentMax = element;
        }
    })
    return currentMax;
}


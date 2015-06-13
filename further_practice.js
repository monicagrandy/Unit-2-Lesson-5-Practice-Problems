//1. Write a function isInteger(x) that determines if x is an integer

function isInteger(x){
	if (typeof x == "number"){
		return true;
	}
	else {
		return false;
	}
}

console.log(isInteger(7));
console.log(isInteger(true));

//2. Write the function splitStringToLowerCase. This function should:
//Take a string and split it to an array of strings by spaces
//Return an array with the set of split strings in lowercase format
//Use the string functions toLowerCase and split

function splitStringToLowerCase(mystring) {
	var mySplitString = mystring.toLowerCase().split(" ");
	return mySplitString;
}

console.log(splitStringToLowerCase("Hello, I am a string"));

//3. Write the function sumArray. This function should:
//Add the numbers inside of an array passed to the function, and return the sum
//Return 0 of the array is empty

var sum = [7, 6, 5, 4, 3, 2, 1].reduce(function(a,b){  //reduce(callback(initial val, current val))
	if(sum != []) {
		return a+b; 
	}
	else {
	return 0;
	}
});

console.log(sum);


//4. Write a function that returns a boolean indicating whether or not a string is a palindrome.

function findPalindrome(myString){
	
	var myArray = myString.split("");
	if (myArray.length % 2 == 0){
		var firstHalf = myArray.splice(0, Math.floor(myArray.length / 2));
		myArray = myArray.sort();
		firstHalf = firstHalf.sort();
		if (myArray.toString() == firstHalf.toString()) {
			console.log("'" + myString + "'" + " is a palindrome!");
			}
		else if (firstHalf.toString() != myArray.toString()) {
			console.log("'" + myString + "'" + " is not a palindrome!");
		}
	}	
	else if (myArray.length % 2 != 0) {
		var middle = Math.floor(myArray.length/2)
			middle = myArray.splice(3,1);
		var firstHalf = myArray.splice(0, Math.floor(myArray.length / 2));
			myArray = myArray.sort();
			firstHalf = firstHalf.sort();
		if (myArray.toString() == firstHalf.toString()) {
			console.log("'" + myString + "'" + " is a palindrome!");
			}
		else if (firstHalf.toString() != myArray.toString()) {
			console.log("'" + myString + "'" + " is not a palindrome!");
			}
	}		
}

var palindrome = "racecar";
var notPalindrome = "dogs";

console.log(findPalindrome(palindrome));

console.log(findPalindrome(notPalindrome));

//refactored
function checkPalindrome(myString){
	var length = myString.length;
	for(var i = 0; i < length/2; i++){
		if(myString.charAt(i) !== word.charAt(length-1-i)) {
			console.log("'" + myString + "'" + " is not a palindrome");
			return false;
		}
		else {
			console.log("'" + myString + "'" + " is a palindrome");
			return true
		}
	}
}
var word = "hello"
console.log(checkPalindrome(word));

//5. Write the function addNumbers to:
//Accept an array of numbers
//Add those numbers and return the sum
//Do this using a while loop.
//Example:
//addNumbers([0,1,2,3]); // returns 6.
//addNumbers([]); // returns 0.


var array = [1,2,3,4];
function addNumbers(numbers) {
var i = 0;
var total = 0;
do {
	total += numbers[i]
	i++
}
while(i < numbers.length);
return total;
}
console.log(addNumbers(array));

function addSum(nums){
	var i = 0
	var total = 0;
	while(i<nums.length){
		i++;
		total += nums[i]; 
	}
	return total
}

console.log(addSum(array));//why does this give me back NaN?













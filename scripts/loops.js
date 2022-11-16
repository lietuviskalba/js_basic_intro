/* 
>> Documentation for JavaScript
    [] loops
>> Page: 31
>> Link to doc: https://docs.google.com/document/d/1NoFPu4Z9_kNf3hDG59YhuLVXH1JKc71kgO7CtFawtDw/edit?skip_itp2_check=true#
*/

var allLoopSize = 3;

console.log("Loops example: ")

for (let i = 0; i < allLoopSize; i++) {
    console.log(i + 1, ") for loop")
}

let i = 0;
do {
    i += 1;
    console.log(i * 10, ") do while loop");
} while (i < allLoopSize);

let j = 0;
while (j < allLoopSize) {
    j++;
    console.log(j * 100, ") while loop");
}

var listOfLetters = ["A","B","C","D","E"]

listOfLetters.forEach(function(letters, i){
    console.log((i+1) * 1000, ") for each loop, letter: ",letters)
})
/* 
>> Documentation for JavaScript
    [] conditional statements (if else)
    [] logical operators
>> Page: 24
>> Link to doc: https://docs.google.com/document/d/1NoFPu4Z9_kNf3hDG59YhuLVXH1JKc71kgO7CtFawtDw/edit?skip_itp2_check=true#
*/

// Example of some conditional statements
console.log(">>> if; else if; else: ")

var currentAge = 26

console.log("Current given age: ", currentAge)

if (currentAge < 0) {
    console.log("Not even alive")
}
else if (currentAge >= 1 && currentAge <= 3) {
    console.log("Just a baby")
}
else if (currentAge >= 4 && currentAge <= 12) {
    console.log("Just a child")
}
else if (currentAge >= 13 && currentAge <= 17) {
    console.log("Just a teen")
}
else if (currentAge === 18) {
    console.log("The law starts to apply")
}
else if (currentAge >= 19 && currentAge <= 60) {
    console.log("A dult adult")
}
else if (currentAge >= 19 && currentAge <= 60) {
    console.log("Old man, the future is now")
}
else if(currentAge <= 200){
    console.log("Pushing the limit")
}
else{
    console.log("An error was made with the age of: ", currentAge)
}

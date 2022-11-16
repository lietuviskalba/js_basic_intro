/* 
>> Documentation for JavaScript
    [] objects
>> Page: 30
>> Link to doc: https://docs.google.com/document/d/1NoFPu4Z9_kNf3hDG59YhuLVXH1JKc71kgO7CtFawtDw/edit?skip_itp2_check=true#
*/

var myPerson = {
    id: 1,
    name: "Alice",
    isAlive: true,
    licenseCollection: ["A", "C", "BA"],
    pingStatus(){
        console.log(this.name, " is online: ", this.isAlive)
    }
}
console.log("Object example: ")
console.log(myPerson.id)
console.log(myPerson.name)
console.log(myPerson.licenseCollection)
myPerson.pingStatus()
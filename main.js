console.log('hello world')
// This is a comment
/*
multi line
comments
*/

// var, let, const declaring keywords
// declare a variable
var firstName;

console.log(firstName);

firstName = 'andy'
console.log(firstName)

//bad practice redeclaring variable 
var firstName = "sean"
console.log(firstName)
//bad practice declaring without keyword
lastname ='santana'
console.log(lastname)

console.log(firstName);console.log(lastname);

//camelCase 
let thisIsCamelCase

var string1= 'This is a string'
var string2= "This is a string"
var string3= "This is Sean's string"
var string1= 'This is Sean\'s string'

//Concat strings
var joinedString = string1 + '!'
console.log (joinedString)
var fullName = firstName + ' ' + lastname 
console.log(fullName)

console.log(firstName,lastname)
console.log(firstName + ' ' + lastname)

//indexing
console.log(fullName[0])
//cannot use negative indexs
console.log(fullName[-1])
//Instead of index out of range we get undefine 
console.log(fullName[100])

//console.log(fullName.charAt(-1))
//String Methods
console.log(fullName.toUpperCase())
console.log('IM not Yelling'.toLowerCase())

//length property
console.log(fullName.length)

//string slicing similar to [::]
//.slice(<startIndex>,<endIndex>)
var myName = 'dylan smith'
var slicedName = myName.slice(0,5)
var subStringName = myName.substring(0,5) //slice an array
console.log(subStringName)
console.log(slicedName)
//out of place, strings are immutable
console.log(myName)
//using negative index
var compoundString='welcometojavascripts'
console.log(myName.slice(-5,-1))

//replacing a substring
var marriedName = console.log(myName.replace('smith','cervantes'))
console.log(marriedName)
//Template literal aka formatted string 
//syntax with backtics
var congratsString = `Congrats on the marriage ${marriedName}`
console.log(congratsString)
console.log

var multiVars = `Your instructors are ${fullName} and ${myName}`
console.log(multiVars)
//Types
console.log(typeof multiVars)
// array is an object 
console.log(typeof [])
console.log(typeof 12)
console.log(typeof 12.74)

//math operations
console.log(5+5)
console.log(10-5)
console.log(10*10)
console.log(12/6)
console.log(10**2)
console.log(11% 2)
 
// Type Conversion 

// str -> number
var strNum = '123'
var numberNum =parseInt(strNum)
console.log(numberNum,typeof numberNum)

var decimalStr = '12.5'
console.log(parseInt(decimalStr))
//parsefloat to keep digits after decimal
console.log(parseInt(decimalStr))

// number -> string 
var myNum = 100
var numbers = myNum.toString()
console.log(numbers, typeof numbers)

//'3.14' + 4 (concats them togeter as a string)
console.log('3.14' + 4)
//converrt string to float
console.log(parseFloat('3.14') + 4)

//Boolean
var bool1 = true
var bool2 = false 
console.log(typeof bool1)

//Comparisons
console.log(2>1)
console.log(1<2)
console.log(2>=3)
console.log(2<=2)
console.log(1 == '1','not strict') // will return true is checking is '1' is a int
console.log(1==='1')//3 = is the value and the data type 
console.log('1'==='1')

//Negating Booleans 
console.log(1!=2)
console.log(!10> 11)//put not infront of first comparsion
console.log(!true)
console.log(!false)
console.log(BooLean(''))
console.log(BooLean(12))
console.log(BooLean(0))
//membership check on empty objects return true
console.log(BooLean([]))
console.log(BooLean({}))

//Chaining conditional 
// ||(in javascript) == or (in python )
console.log('=========','testing or')
console.log(true || false)
console.log(false || true)
console.log(false || false)
console.log(true || true)
// and is &&
console.log('============','testing and')
console.log(true && false)
console.log(false && true)
console.log(true && true)

// short circuit
function one(){
    console.log('one ran')
    return false
}

function two(){
    console.log('two ran')
    return

}

function three(){
    console.log('three ran')
    return true
}
// one() && two() && three()
one() || two()||three()

false || two() || false|| three() || one() 

// null vs undefined 
var noValue 
console.log(noValue)

var myNull = null
console.log(typeof myNull)

noValue|| myNull|| one()

//let and const
var myNull = true
console.log(myNull)

let myLet = 'let'
//break cant redeclare
//let myLet ='test'
myLet ='update'
console.log(myLet)

let test;

test = 'test'
const myConst = 'const'
// // break for redeclaring
// //const myConst = 'break'
// myCionst += 'test'
// console.log(myConst)

if (true) {
    let blockVariable = 'test var'
    console.log(blockVariable)
}




if (true) {
    const blockVariable2 = 'test const'
    console.log(blockVariable)
}

if(true){
    var blockVariable3 = 'test var'
    console.timeLog(blockVariable3)
}
 
console.loig(blockVariable3)

//console.log(bockVariable)
//console.log(blockVariable)

//array
let myArray = []
let myArray2 = new Array()
console.log('============== Working with Arrays')
//array with elements
const filledArray = [1,2,3,'a','b','c']
console.log(filledArray[3])
console.log(filledArray[0])
//undefined
console.log(filledArray[100])
console.log(filledArray.length)
//add to end of array.push()
myArray.push('sean')
console.log(myArray,myArray.length)
//push returns new length
console.log(myArray.push('dylan'))
// can add multiple elements at once
console.log(myArray.push('gian','todd','john','alec',[1,2,3]))
console.log(myArray)

let myPop =myArray.pop()
console.log(myPop, myArray)


//Destructuring
console.log('====================== Destructuring')

console.log(myArray)

const [instructorsOne,instructorsTwo, studentOne, studentTwo,studentThree]=myArray
console.log(myArray)
console.log(instructorsOne,instructorsTwo,studentThree)
// long hand of destructuring
// const instrucorOne = myArray[0]
// const instructorTwo = myArray[1]
//const studentOne = myArray[2]
//const studentTwo = myArray[3]
//const studentOne = myArray[4]
//const studentTwo = myArray[5]

const [teacherOne, teacherTwo, ...students]= myArray //... is the rest operator 
console.log(teacherOne, students)

const [] = [1,2,3,4,5,7]

const [one,two, ,four, ...fiveAndSeven] = [1,2,3,4,5,7]
console.log(newOne, four, fiveAndSeven)

console.log(...students)

students.unshift ('khoa')
students.unshift('christopher','David')
console.log(students)
// remove from the beginning shift
students.shift(2)
console.log(students) 

console.log(students.indexOf('todd'))
// returns -1 if the value is not present
console.log(students.indexOf('test'))

//map,filter,reduce
//array.methods(<function>)

console.log(studnets.map((student)=>   student.toUpperCase()))

console.log(students.map((student) =>{
    return student.toUpperCase()
})) 

// function 
/*
Traditional Syntax
function nameOfFunc(<parameters>){}

E56 Arrow func syntax
const <nameOfFunc> = () => {}
*/
function addNums(num1,num2){
    console.log(num1,num2)
    return num1 + num2
}

console.log(addNums(10,15))

const arrowAddNums = (num1,num2) => {
    return num1 + num2
}
//nothoisted 
//console.log(arrowAddNums(10,10))
console.log (arrowAddNums = (num1, num2) => {

})

console.log(arrowAddNums(10,10))

const greeting = name=> `hello ${name}`

console.log(greeting('sean'))

function addMultipleNums(num1,num2,num3)

console.log(addMultipleNums(12,1,5))
console.log(addMultipleNums(randomNum[0],randomNum[1],randomNum[2]))
console.log(addMultipleNums(...randomNum))

function addManyNumbers (...numbers))
console.log(numbers)
return numbers.reduce((acc,num)=> acc + num)

console.log(addManyNumbers(10,4,9,10,10,11))
console.log(addManyNumbers(...randomNum))

//conditionals 
//if () {} syntax
//if () {} suntax
//if () {}else{} syntax
//if () {}else if {} else syntax

if (10>11){
    console.log(('10>11'))
} else

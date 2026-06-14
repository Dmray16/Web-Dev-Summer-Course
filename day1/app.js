// legacy js:

// var x=5
// var y=8
// var z=x+y
// console.log(z)
// alert(z)

// modern js:
for(let i=0; i<5; i++){
    console.log(i)
}
// console.log(i) // error: i is not defined, because let is block scoped

for(var j=0; j<5; j++){
    console.log(j)
}
// console.log(j) // 5, because var is function scoped, not block scoped

const pi=3.14
pi=5 // error: Assignment to constant variable, because const is read-only and cannot be reassigned

//javaScript types:
let name="John" // string
let age=30 // number
let isStudent=true // boolean
let student={name:"John", age:30, isStudent:true} // object
let numbers=[1,2,3,4,5] // array
let nothing=null // null
let undefinedVar // undefined


//javaScript operators:
    //comparsion operators:

    console.log(5==5) // true
    console.log(5===5) // true
    console.log(5=='5') // true
    console.log(5==='5') // false
    //== compare values
    //=== compare values and types

    console.log(5!=5) // false
    console.log(5!==5) // false
    console.log(5!='5') // false
    console.log(5!=='5') // true
    //!= compare values
    //!== compare values and types

    console.log(5>5) // false
    console.log(5<5) // false
    console.log(5>=5) // true
    console.log(5<=5) // true

    //logical operators:
    console.log(5>5 && 5<10) // false
    console.log(5>5 || 5<10) // true
    console.log(!(5>5)) // true

    //arithmetic operators:
    console.log(5+5) // 10
    console.log(5-5) // 0
    console.log(5*5) // 25
    console.log(5/5) // 1
    console.log(5%2) // 1
    console.log(5**2) // 25

    //unary operators:
    let a=5
    console.log(-a) // -5
    console.log(+a) // 5
    console.log(++a) // 6
    console.log(--a) // 5
    console.log(a++) // 5
    console.log(a) // 6
    console.log(a--) // 6
    console.log(a) // 5

    //assignment operators:
    let b=5
    b+=5 // b=b+5
    b-=5 // b=b-5
    b*=5 // b=b*5
    b/=5 // b=b/5
    b%=5 // b=b%5
    b**=5 // b=b**5

    //increment and decrement operators:
    let c=5
    c++ // c=c+1
    c-- // c=c-1

    //ternary operator:
    let d=5
    let e=10
    let f= d>e ? d :e // if d is greater than e, then d is assigned to f, else e is assigned to f

    //typeof operator:
    let g=5
    console.log(typeof g) // number

//conditional statements:
let h=5
if(h>5){
    console.log("h is greater than 5")
}
else if(h<5){
    console.log("h is less than 5")
}
else{
    console.log("h is equal to 5")
}

//switch statement:
let i=5
switch(i){
    case 5:
        console.log("i is 5")
        break
    case 10:
        console.log("i is 10")
        break
    default:
        console.log("i is not 5 or 10")
        break
}

//loops:
//for loop:
for(let j=0; j<5; j++){
    console.log(j)
}
//while loop: if false nver runs, if true runs until condition is false
let k=0
while(k<5){
    console.log(k)
    k++
}

//do-while loop: runs at least once, even if the condition is false
let l=0
do{
    console.log(l)
    l++
}while(l<5)

//for-in loop:
let m={name:"John", age:30, isStudent:true} // object
for(let key in m){
    console.log(key, m[key])
}

//functions:
function add(a,b){
    return a+b;
}

//predefined functions:
    alert("Hello World") // displays an alert box with a message
    let x= prompt("Enter your name") // displays a prompt box with a message and an input field
//array methods:
let n=[1,2,3,4,5] // array
n.push(6) // adds an element to the end of the array
n.pop() // removes the last element of the array
n.shift() // removes the first element of the array
n.unshift(0) // adds an element to the beginning of the array
n.splice(2,1) // removes 1 element from index 2
n.length // returns the length of the array
n.sort() // sorts the array
n.reverse() // reverses the order of the array
n.concat([7,8,9]) // concatenates two arrays
n.find(x => x > 3) // returns the first element that satisfies the condition
n.filter(x => x > 3) // returns all the elements that satisfy the condition
n.findIndex(x => x > 3) // returns the index of the first element that satisfies the condition

//next session : arrowFunctions, DOM, DOM manipulation
 
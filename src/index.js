
//after assigned a value to a variable using let , can reassign it to a new value
let limit = 100;
limit =200;
console.log(limit);

//after assigned a value to a variable using const , can't reassign it to a new value
const emails=['frodo@email.com', 'sam@email.com'];
emails.push('arya@email.com');
console.log(emails);

//control with block scoping 
let limit1=200;
{
    let limit1=10;
    console.log('backstage limit', limit1);
}
console.log('overall venue limit', limit1);

//if we use var keyword inplace of let or const ,latest value of that variable will be display if that value is assaigned under a block scope
var limit2=200;
{
    var limit2=10;
    console.log('backstage limit', limit2);
}
console.log('overall venue limit', limit2);

//template literals
let a = 'birthday';
let b =`Happy ${a}`;
console.log(b);

//spread operator 
let array=[20,30,40];
let array1=[10,...array,50];
let array2=[0,10,...array];
console.log(array1); 
console.log(array2);

// rest parameters
function collect(...c)
{
    console.log(c);
}
collect(0,10,20,30);

//arrow function
setTimeout(() => {
        console.log("Hello World");
},3000);

let cheer = () => {
    console.log("hello!");
}
cheer();

//Map method
let values = [20,30,40];
let double = (n) => {
    return n*2;
}
let doubled = values.map(double);
console.log(doubled);
//compress the line of code
/** let values1 = [20,30,40];
let doubled1 = values1.map((n) => {
    return n*2;
});
console.log(doubled1);*/
let values1 = [20,30,40];
let doubled1 = values1.map((n) =>n*2);
console.log(doubled1);

// Filter method
let scores = [7,16,21,4,3,22,5];
let highScores = scores.filter((n)=>{
    return n >15;
})
console.log(highScores);

//string helper method
 let string ="hello"+"o".repeat(10);
 console.log(string);

 let string1 = `hello${"o".repeat(10)}`;
 console.log(string1);

 //import value from another modules
import {fellowship,total} from'./fellowship';
console.log(fellowship);
console.log(total);

import{add,multiply} from  './math';
console.log(add(5,10));
console.log(multiply(2,10));

/** If make multiply as default in math.js no need to write under {}
import multiply from  './math';*/

//Inheriting Classes
import{details,specification} from'./classes';
console.log(details.hello());
console.log(specification.hello());




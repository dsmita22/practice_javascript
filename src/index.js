
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

//writing Set
let set = new Set();
set.add(5);
set.add(43);
set.add("Hello");
set.add({x: 50, y: 200}); 
console.log(set);
console.log(set.size);
console.log(set.has(5));

let chars= 'kjhkhkjnjbkjbk';
let chars_arr=chars.split("");
let chars_set= new Set(chars_arr);
console.log(chars_set);

//writing map
let map = new Map();
let key_1="string key";
let key_2={a:'key'};
let key_3= function(){};
map.set(key_1,'return value for a string key');
map.set(key_2,'return value for an object key');
map.set(key_3,'return value for a function key');
console.log(map);

let numArr=[[1,'one'],[2,'two'],[3,'three']];
let valmap= new Map(numArr);
 for(let [key , value]of valmap.entries()){
     console.log(`${key} points to ${value}`);
 }

 let str ='aaxaxaxaxxaccdkoojcsclm';
  let letters = new Map();
  for(let i=0; i<str.length;i++){
      let letter=str[i];
      if(!letters.has(letter)){
          letters.set(letter,1);
      }else{
          letters.set(letter,letters.get(letter)+1);
      }
  }
  console.log(letters);
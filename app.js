'use strict';
//This is my first java script code
// const name2 = "Amanda"; //String literal
// let age = 20; //Number literal
// let isApproved = false; //Boolean literal
// let name='Mosh';
// let firstName = undefined;
// let labelName = null;
// name = "Arvington"; 
// let lastName ="Azad";

// //OBJECT Literal
// let person = {
//     name: "Arvington Azad",
//     age: 21

// };
// //Changing the property of an object
// //Dot notation
// person.name = "Mosh";
// //Bracket notation`
// let selection = 'name';
// person[selection] = "Josh";
// console.log(person.name); 

// //Object arrays
// let selectionOfColors = ['red','blue'];
// selectionOfColors[2] = 2;
// console.log(selectionOfColors.length);

// //Functions that can perform a task
// function greet(word1, word2) {
//     console.log("Hello, my name is "+word1 +" "+word2);
// }
// greet(name, lastName);

// //Function that performs a task
// function square(number){
//     return number * number;
// } 

// let number = square(2);
// console.log(number);
// //Fact: console.log is a function call
// console.log(square(2)); 
// 'use strict';

const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }

    console.log('current class name: ' + className);
});
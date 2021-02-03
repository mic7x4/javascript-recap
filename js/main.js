let name = 'Crook';
let age = 40;

// Concatenation
// const names = "Ndabaga Michel";
// const fruits = 'Tuna, Blackberry, Berry';
// const newFruits = fruits.split(', ');
// const fruited =  newFruits.map((fruit)=>console.log(fruit))
// console.log(fruits.split(', '));

// Arrays
// const fruits = ['tuna', 'apple', 'pie'];
// fruits[3] = 'Avocadoes'; 
// fruits.push('Homo');
// fruits.unshift('No homo');
// console.log(Array.isArray(fruits));
// fruits.map((fruit)=>console.log(fruit));

// Object
// const person = {
//     firstname:'Crook',
//     lastname:'artwork',
//     age:30,
//     hobbies:['games', 'music','sports'],
//     address:{
//         street:'KN 370 kk',
//         city: 'Boston',
//         state:'MA'
//     }
// }
// person.hobbies.map((hobby)=> console.log(hobby))

// Array of objects
const todos =[
    {
        id:1,
        text:'Go to the doc',
        isCompleted:false
    },
    {
        id:2,
        text:'Clean the house',
        isCompleted:true
    },
    {
        id:3,
        text:'Date with cougar',
        isCompleted:false
    },
    {
        id:4,
        text:'Date with cougar',
        isCompleted:true
    },
]
// todos.map((todo) => console.log(todo.id));
// todos.forEach((todo) => console.log(todo.text));

// const todoText = todos.map((todo) =>  todo.text);
// console.log(todoText);

// const todoCompleted = todos.filter((todo) =>{
//   return   todo.isCompleted === true
// }).map((todo)=>todo.text)
// console.log(todoCompleted);

// Conditions if , tenary

// const x= 7;
// const color = x > 10 ? 'red' : 'blue';

// switch(color){
//     case 'red':
//         console.log('Color is Red');
//         break;
//     case 'blue':
//         console.log('The fucking color is Blue');
//         break;
//     default:
//         console.log('Unknown Color');
//         break;
// }

// const number = (num1,num2)=>{
//     return num1 + num2;
// }

// OOP
// function Person(firstname,lastname,dob,city){
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.dob = new Date(dob);
//     this.city = city
// }
// Person.prototype.getBirthYear = function(){
//         return this.dob.getFullYear();  
// }
// Person.prototype.getFullName = function () {
//         return `${this.firstname}  ${this.lastname}`;
// }

class Person{
    constructor(firstname,lastname,dob,city){
        this.firstname = firstname;
        this.lastname = lastname;
        this.dob = new Date(dob);
        this.city = city

    }
    getBirthYear(){
        return this.dob.getFullYear();  
    }
    getFullName(){
        return `${this.firstname}  ${this.lastname}`;

    }
}

const person1 = new Person('Michael','Crook','30 jun 1993','Musanze');
const person2 = new Person('Uwimana','karori','June 12 2020','Bugesera');
console.log([person1.getBirthYear(),person2.getBirthYear()]);
console.log([person1.getFullName(),person2.getFullName()]);
console.log(person1);

// DOM
// const btn = document.querySelector('.btn');
// btn.addEventListener('click',(e)=>{
//     e.preventDefault();
//     document.querySelector('#my-form').style.background='crimson'
// })

// Forms 
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit',onSubmit);
function onSubmit(e){
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please fill all fields';
        setTimeout(()=>msg.remove(),2000)
    }else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(li);
        nameInput.value ='';
        emailInput.value = '';
    }
}
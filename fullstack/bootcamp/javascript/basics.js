//create a documentation for all the basic functions of javascript

//A variable that can be changed later on (causing problems)
var idadeVar = 18;

//A variable that can be changed later on
let idadeLet = 18;

//A variable that can't be changed later on
const idadeConst = 18;

//string
let nome = 'Iago Santiago Pires';

//array
let hobbies = ['cozinhar', 'jogar'];

//object
let person = {
    name: 'Max', //Property (blue box)
    greet(){ //Method (purple box)
        console.log('Hello!');
    }
};

//to acess the method:
person.greet(/*parameters*/); //methods are functions that are inside of objects, called using the . notation

//function
function calcularNascimento(/*parameters*/){
    return idadeConst - 2023;
}

//arrow function
const calcularNascimento = (/*parameters*/) => {return idadeConst - 2023;}

//arrow function with only one parameter and one line of code
const calcularNascimento = idadeConst => idadeConst - 2023;

//to call the function:
calcularNascimento(/*parameters*/);

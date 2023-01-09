
let nome = 'Iago Santiago Pires'; //string
const idade = 21; //int
let peso = 69.4; //float
let altura = 1.73; //float

let imc = peso / (altura * altura); //basic math operation

//string concatenation
console.log(nome, 'tem', idade, 'anos, pesa', peso, 'kg', 'tem', altura, 'de altura e seu IMC é de', imc);
console.log(`${nome} tem ${idade} anos, pesa ${peso}kg, tem ${altura} de altura e seu IMC e de ${imc}`);
console.log(nome + ' tem ' + idade + ' anos, pesa ' + peso + 'kg, tem ' + altura + ' de altura e seu IMC e de ' + imc);

//shorthand operations
idade++; //idade = idade + 1;
idade--; //idade = idade - 1;
idade ** 2; //idade = idade * idade;
idade += 2; //idade = idade + 2;
idade -= 2; //idade = idade - 2;
idade *= 2; //idade = idade * 2;
idade /= 2; //idade = idade / 2;

//NaN - Not a Number
console.log(7 / 0); //Infinity
console.log('10' / 2); //5
console.log('10' + 2); //102
console.log('10,2' / 2); //NaN

//string operations
console.log(nome.length); //length of the string
console.log(nome.toUpperCase()); //converts the string to uppercase
console.log(nome.toLowerCase()); //converts the string to lowercase
console.log(nome.replace('Iago', 'Iago Santiago')); //replaces the first string with the second string
console.log(nome.replace('Iago', 'Iago Santiago').toUpperCase()); //replaces the first string with the second string and converts the string to uppercase
console.log(nome.replace('Iago', 'Iago Santiago').toUpperCase().length); //replaces the first string with the second string, converts the string to uppercase and returns the length of the string

//array operations
let hobbies = ['cozinhar', 'jogar', 'programar'];
console.log(hobbies[0]); //returns the first element of the array
console.log(hobbies.length); //returns the length of the array
hobbies.push('ler'); //adds an element to the end of the array
hobbies.unshift('correr'); //adds an element to the beginning of the array
hobbies.pop(); //removes the last element of the array
hobbies.shift(); //removes the first element of the array
console.log(hobbies.indexOf('jogar')); //returns the index of the element in the array
console.log(hobbies.includes('jogar')); //returns true if the element is in the array and false if it isn't




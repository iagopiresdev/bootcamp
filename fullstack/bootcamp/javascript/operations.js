
let nome = 'Iago Santiago Pires'; //string
const idade = 21; //int
let peso = 69.4; //float
let altura = 1.73; //float

let imc = peso / (altura * altura); //basic math operation

//string concatenation
console.log(nome, 'tem', idade, 'anos, pesa', peso, 'kg', 'tem', altura, 'de altura e seu IMC é de', imc);
console.log(`${nome} tem ${idade} anos, pesa ${peso}kg, tem ${altura} de altura e seu IMC e de ${imc}`);
console.log(nome + ' tem ' + idade + ' anos, pesa '+ peso + 'kg, tem ' + altura + ' de altura e seu IMC e de ' + imc);

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


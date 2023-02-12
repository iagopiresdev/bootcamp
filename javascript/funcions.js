function imprimirDeclaration (string){
    console.log(string);
};

const imprimirExpression = function (string){
    console.log(string);
};

const imprimirArrow = (string) => {
    console.log(string);
}

const imprimirArrowOneLine = string => console.log(string);


let unidade = {
    nome: 'Unidade',
    uf: 'AM',
    fundacao: '28/10/1999',
    docentes: 35,
    imprimeNome: function(){
        console.log(this.nome);
    }
}
unidade.imprimeNome();

//funcao imediata:
(function(){
    console.log('Olá, mundo!');
})();


imprimirDeclaration('Olá, mundo!');
imprimirExpression('Olá, mundo!');
imprimirArrow('Olá, mundo!');


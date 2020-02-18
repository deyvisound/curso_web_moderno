
// Funções anonimas nada mais é do que funções sem nome 

//Definindo uma função anônima 
let soma = function(a,b){
    return a+b 
}

//Passando uma função anônima por parâmetro 
imprimirResultado = function (a,b, operacao = soma){
    return console.log(operacao(a,b))
}

imprimirResultado(3,4);

//passando uma função diretamente por parâmetro 
imprimirResultado(3,4, function (a,b) {
    return a - b 
})

//passando função arrow por parâmetro
imprimirResultado(3,4, (a,b) => a*b)


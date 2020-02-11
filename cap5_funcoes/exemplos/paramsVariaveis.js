
//Podemos recuperar parâmetros passados para função, mesmo que eles não tenho sido definidos
function soma(){
    let soma = 0;

    for(i in arguments)
        soma += arguments[i];

    return soma;
}

console.log(soma())
console.log(soma(1,2,3))
console.log(soma(1,8,"teste"))
console.log(soma('a', 'b', 'c'))
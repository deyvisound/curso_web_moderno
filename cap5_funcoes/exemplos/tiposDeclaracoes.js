
// Function Declaration( São carregadas/compiladas) antes mesmo da execução do código. 
function some(a,b){
    return a+b
}


// Function expression (função anônima)
const minhaFuncao = function(a,b){
    return a+b 
}

// Named function expression(Não é muito usual) 
// Em caso de erro na função, no stack, irá aparecer o nome da função, facilitando a identificação do erro
const mult = function mult(a,b){
    return a+b
}


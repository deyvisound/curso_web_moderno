
let comparaComThis = function(param){
    console.log(this === param)
}

//global é o objeto global no node. 
//No Browser, o window seria igual ao this. 
comparaComThis(global); //true

//Utilizando o bind para mudar o this da function. 
const obj = {}
comparaComThis = comparaComThis.bind(obj) 

comparaComThis(global) //false 
comparaComThis(obj) //true



// Utilizando ArrowFunction 
let comparaComThisArrow = param => console.log(param === this)

//O this de uma arrow function não é o objeto global
comparaComThisArrow(global) // false

//Module Exports é o "ArquivoNode" e o mesmo que o this. 
comparaComThisArrow(module.exports) //true

//O bind não consegue sobreescrever o this do arrowFunction
comparaComThisArrow = comparaComThisArrow.bind(global)

comparaComThisArrow(global) //false

comparaComThisArrow(module.exports) //true 
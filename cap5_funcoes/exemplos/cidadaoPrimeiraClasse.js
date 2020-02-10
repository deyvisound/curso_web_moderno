
//Funcoes declaradas de forma literal: 
function fun1() {}

//Funções pode ser atribuídas a constantes
const fun2 = function() {}

//Funções podem ser armazenadas em arrays 
const array = [function (a,b){return a+b}, fun1, fun2]
console.log(array[0](2,3))

//Funções armazenadas em atributos de objetos
const obj = {}
obj.falar = function(){return 'Opa'}
console.log(obj.falar())

// Passando função como parâmetro
function run(fun){
    fun()
}
run( function(){console.log('Executando...')} )


//Retornando função como parâmetro 
function soma(a,b){
    return function(c){
        return console.log(a+b+c)
    }
}
const retornoFunc = soma(2,3)
retornoFunc(4)


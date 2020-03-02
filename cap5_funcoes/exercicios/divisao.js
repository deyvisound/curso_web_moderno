/*
04)​Crie uma função que irá receber dois valores, o dividendo e o divisor. 
A função deverá imprimir o resultadoe o resto da divisão destes dois valores
*/


const divisao = function(dividendo, divisor){
    
    console.log(`divisão: ${(dividendo/divisor)|0}`) // utilizamos a operação "bit-a-bit", mas tb poderíamos fazer com Math.floor()
    console.log(`resto: ${dividendo%divisor}`)
}

divisao(3,4)
divisao(9,4)

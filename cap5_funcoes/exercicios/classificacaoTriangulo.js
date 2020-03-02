/*
02)​ Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados: 
Equilátero: Os três lados são iguais. 
Isósceles:  Dois lados iguais. 
Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quantoao tamanho de seus lados. 
(Neste exemplo deve-se abstrair as condições matemáticas de existência de umtriângulo).
*/

const classificacaoTriangulo = function(a, b, c){
    let classificacao = '';
    if(a == b && b == c)
        classificacao = 'Equilátero'        
    else if(a == b || b == c || c == a)
        classificacao = 'Isósceles'   
    else 
        classificacao = 'Escaleno'
        
    return classificacao
}



console.log(classificacaoTriangulo(1,4,6))
console.log(classificacaoTriangulo(6,4,6))
console.log(classificacaoTriangulo(4.5,4.5,4.5))


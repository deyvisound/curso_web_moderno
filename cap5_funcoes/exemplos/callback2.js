const notas = [7.2, 7, 8.7, 5.8, 4.2, 7.9, 9, 4.5, 5]

//Sem callBack - Modo padrão 
let notasBaixas1 = [] 
for (i in notas) {
    if(notas[i] < 7)
        notasBaixas1.push(notas[i])
}

console.log(notasBaixas1); 

//Com callBack 
notasBaixas2 = notas.filter(function(nota){
    return nota<7
})

console.log(notasBaixas2)


//Com calback - ArrowFunction
notasBaixas3 = notas.filter( nota => nota < 7)

console.log(notasBaixas3)


// Uma função pode retornar um valor ou não. 
function area(largura, altura){
    const area = largura*altura; 

    if(area > 20)
        console.log(`Valor acima do permitido: ${area}m2.`);
    else
        return area 
}

console.log(area(2,2));

//Parâmetros são opcionais
console.log(area(2))

console.log(area(7,6))


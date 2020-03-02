const valor = 'Global'

// A função carrega consigo o local o qual ela foi definida. 
// Neste caso, idependente de onde ela tenha sido chamada, ela irá referenciar o valor Global
function funcao(){
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    funcao()
}

// Será imprimido o valor "Global"
exec()


/// Repetindo o exemplo do arquivo: "thisAndBind", 
// Quando utilizamos ArrowFunction, o this dentro do setInterval, está dentro do CONTEXTO LEXO, ou seja, 
// Seu contexto é o local o qual foi escrito. 

// O this NÃO irá variar de acordo com que chama.

function Pessoa (){
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade);
    }, 1000);

}

new Pessoa 

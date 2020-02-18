
// ####  Exemplo 1 
//O this dentro do setInterval, não está associado ao objeto Pessoa. 
/*
function Pessoa (){
    this.idade = 0

    setInterval(function(){
        this.idade++
        console.log(this.idade);
    }, 1000);

}
*/

// ####  Exemplo 2 
// Utilizando o bind, conseguindo amarrar o this do setInterval ao this do objeto Pessoa
/*
function Pessoa (){
    this.idade = 0

    setInterval(function(){
        this.idade++
        console.log(this.idade);
    }.bind(this), 1000);

}
*/

// ####  Exemplo 3
// Também conseguimos ajustar o código de forma que  ele chame uma constante que foi definida dentro de Pessoa
function Pessoa (){
    this.idade = 0

    const self = this;
    setInterval(function(){
        self.idade++
        console.log(self.idade);
    }, 1000);

}

new Pessoa 


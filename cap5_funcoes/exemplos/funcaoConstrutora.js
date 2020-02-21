//Um pouco de paradigma OO em javascript
function Carro(velocidadeMaxima = 200, delta = 5){

    //Atributo privado(visivel apenas na função)
    let velocidadeAtual = 0

    // O "this" torna o elemento da classe PÚBLICO

    //método publico
    this.acelerar = function (){
        if(velocidadeAtual + delta <= velocidadeMaxima)
            velocidadeAtual += delta
        else
            velocidadeAtual = velocidadeMaxima 
    }

    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}

let uno = new Carro();
uno.acelerar();
console.log(uno.getVelocidadeAtual()); 


let ferrari = new Carro(350, 20);
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());


console.log(typeof Carro) //Carro é a classe(Function)
console.log(typeof uno) //Uno é a instância da classe, ou seja, o Object

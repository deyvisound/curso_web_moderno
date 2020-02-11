
//Utilizando this
const pessoa = {
    saudacao : 'Bom Dia!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falarGlobal = pessoa.falar
falarGlobal(); //Conflito entre paradígmas: Funcional e OrientadoObjetos


//Desta forma, o 'this' será resolvido para pessoa.
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
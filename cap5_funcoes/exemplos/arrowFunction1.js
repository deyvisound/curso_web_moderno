
//Reduzindo funções ao máximo. 
//Isto facilita o reuso de funções. 

// Funções Arrow SEMPRE são anônimas

let dobro = function(a){
    return a*2;
}

//Reduzindo...
dobro = (a) => {
    return a*2;
}

//Reduzindo ainda mais
dobro = (a) => a*2; //Notação mais utilizada em funções de única linha

console.log(dobro(2));



//Outro exemplo: 

let ola  = function(nome){
    return 'Olá ' + nome;
}

ola = (nome) => 'Olá ' + nome;

ola = _ => 'Olá ' + _ ;

console.log(ola('Deyvison'));

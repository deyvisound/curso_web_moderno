//Callback no browser


//Teoricamente uma página só tem um body
document.getElementsByTagName('body')[0].onclick = function (e){
    console.log('O evento ocorreu! ')
}
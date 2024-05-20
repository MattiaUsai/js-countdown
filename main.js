'use strict';
console.log('sono connesso')


let timer = 10;

const countdown = setInterval(timing ,1000)//imposto unàvariabile count doun che mi attivi la funzione

setTimeout (stop , timer*1000)



function timing (){
    console.log('num')
}

function stop(){
    console.log('hai raggiunto 10 secondi')
    alert('buon anno')
}
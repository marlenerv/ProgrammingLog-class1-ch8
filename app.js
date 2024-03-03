let title = document.querySelector('h1');
title.innerHTML = 'Hora del Desafío';

function btnConsole(){
    console.log('El botón fue clicado');
}

function btnPrompt(){
    let cityUser = prompt("Escribe una ciudad de Brasil");

    alert(`Estuve en ${cityUser} y me acordé de ti`);
}

function btnAlert(){
    alert('Yo amo JavaScript');
}

function bntSum(){
    let num1 = parseInt(prompt("Escribe un número:"));
    let num2 = parseInt(prompt("Escribe otro número:"));
    let result = (num1+num2);
    
    alert(`El resultado de la suma de ${num1} y ${num2} es igual a ${result}`)
}
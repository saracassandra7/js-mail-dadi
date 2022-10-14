/*Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. 
1) creo due estrattori random
2) al click mostro i numeri estratti ed il vincitore*/

const btn =document.querySelector('button')
const numUtente = Math.ceil(Math.random()*6)
const numComputer = Math.ceil(Math.random()*6)

console.log('utente', numUtente);
console.log('pc', numComputer);

btn.addEventListener('click', function(){
  utente.innerHTML += numUtente
  computer.innerHTML += numComputer

  if(numUtente> numComputer){
    vincitore.innerHTML = `Complimenti, hai vinto!`

  }else if(numUtente< numComputer){
    vincitore.innerHTML = `Che sfortuna, ha vinto il computer!`
    
  } else{
    vincitore.innerHTML = `Parità!`
  }
})

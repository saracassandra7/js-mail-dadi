/*1) crea un array che sia la lista di chi può accedere
2) chiedi all'utente la mail tramite un prompt
3) fai il controllo per vedere se la sua mail è nella lista
4) stampa risultato*/

const listaMail = ['sara7@gmail.com', 'aurora5@gmail.com', 'nick15@gmail.com', 'fra3@gmail.com']
let isMail = false;
const mailInserita = prompt('Inserisci la tua mail')


for(let i = 0; i<listaMail.length; i++){
  if(listaMail[i] === mailInserita){
    isMail = true;
    break;
  }else{
    isMail = false;
  }

  
}
console.log(listaMail);


if(isMail){
  output.innerHTML = `La mail "${mailInserita}" risulta presente in lista, Benvenut*!`

}else{
  output.innerHTML = `La mail "${mailInserita}" non risulta presente in lista, siamo spiacenti.`
}

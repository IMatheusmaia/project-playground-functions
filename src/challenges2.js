// Desafio 11 - Crie a função generatePhoneNumber
function generatePhoneNumber(phoneNumber){
  let cont= 0
  if(phoneNumber.length < 11 || phoneNumber.length > 11){
    return 'Array com tamanho incorreto.'
  }else if(phoneNumber.length == 11){
    for(let i=0; i<phoneNumber.length; i++){
      cont= 0
      if(phoneNumber[i] < 0 && phoneNumber[i] > 9){
        return 'não é possível gerar um número de telefone com esses valores'
      }else if(cont>=3){
        for(let j=0; j<phoneNumber.length; j++){
          if(phoneNumber[i]==phoneNumber[j]){
            cont++
          }
        }
          return 'não é possível gerar um número de telefone com esses valores'
      }else if(cont < 3){
        return `(${phoneNumber[0]}${phoneNumber[1]}) ${phoneNumber[2]}${phoneNumber[3]}${phoneNumber[4]}${phoneNumber[5]}${phoneNumber[6]}-${phoneNumber[7]}${phoneNumber[8]}${phoneNumber[9]}${phoneNumber[10]}`
      }
    }
  }
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]))
// Desafio 12 -  Crie a função triangleCheck

// Desafio 13 - Crie a função hydrate

/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => {}),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => {}),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => {}),
};

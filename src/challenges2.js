// Desafio 11 - Crie a função generatePhoneNumber
function generatePhoneNumber(phoneNumber){
  let cont= 0
  if(phoneNumber.length < 11 || phoneNumber.length > 11){
    return 'Array com tamanho incorreto.';
  }else if(phoneNumber.length == 11){
    for(let i=0; i<phoneNumber.length; i++){
      cont= 0;

      if(phoneNumber[i] < 0 || phoneNumber[i] > 9){
        return 'não é possível gerar um número de telefone com esses valores';
      }

      for(let j=0; j<phoneNumber.length; j++){
        if(phoneNumber[j] == phoneNumber[i]){
          cont++;
          
        }
      } 
      
      if(cont>=3){
        return 'não é possível gerar um número de telefone com esses valores';
      }

    }
  }
      return `(${phoneNumber[0]}${phoneNumber[1]}) ${phoneNumber[2]}${phoneNumber[3]}${phoneNumber[4]}${phoneNumber[5]}${phoneNumber[6]}-${phoneNumber[7]}${phoneNumber[8]}${phoneNumber[9]}${phoneNumber[10]}`;
}
generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1])
// Desafio 12 -  Crie a função triangleCheck
function triangleCheck(lineA, lineB, lineC){
  let lineAb= lineA+lineB;
  let lineBc= lineB+lineC;
  let lineCa= lineC+lineA;

  let diffLineAb= Math.abs(lineA-lineB);
  let diffLineBc= Math.abs(lineB-lineC);
  let diffLineCa= Math.abs(lineC-lineA);

  if(lineAb > lineC && lineBc > lineA && lineCa > lineB){
    if(diffLineAb < lineC && diffLineBc < lineA && diffLineCa < lineB){
      return true
    }else{
      return false
    }
  }else{
    return false
  }
}
triangleCheck(10, 14, 8);

// Desafio 13 - Crie a função hydrate
function hydrate(string){
  let num= 0;
  let numberList= [];
  for(let i=0; i<string.length; i++){
    num = parseInt(string[i]);
    numberList.push(num);
  }
    let newNumberList= numberList.filter(number=>!Number.isNaN(number));
    let sum= 0
      for(let i=0; i<newNumberList.length; i++){
        sum+=newNumberList[i]
        
      }
    
    return `${sum} copos de água`
}
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));
/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => {}),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => {}),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => {}),
};

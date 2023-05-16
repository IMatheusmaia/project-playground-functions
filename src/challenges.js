// Desafio 1 - Crie a função compareTrue
function compareTrue(fishers1, fishers2) {
  if (fishers1 && fishers2) {
    return true
  } else {
    return false
  }
}
compareTrue(true, false);

// Desafio 2 - Crie a função splitSentence
function splitSentence(frase) {

  let words = frase.split(' ');

  return words
}
splitSentence("Vamo que Vamo");

// Desafio 3 - Crie a função concatName
function concatName(listNames) {
  let names = '';
  names += listNames[listNames.length - 1];
  names += ', ';
  names += listNames[0];

  return names
}
concatName(['foguete', 'não', 'tem', 'ré']);

// Desafio 4 - Crie a função footballPoints
function footballPoints(wins, ties) {
  let winPoints = 3;
  let tiesPoints = 1;
  let teamPoints = wins * winPoints + ties * tiesPoints;
  return teamPoints

}
footballPoints(14, 8);

// Desafio 5 - Crie a função highestCount
function highestCount(listNumbers) {
  let highNumber = Math.max(...listNumbers);
  let cont = 0;
  for (let i = 0; i < listNumbers.length; i++) {
    if (highNumber == listNumbers[i]) {
      cont++
    }
  }
  return cont
}
highestCount([0, 4, 4, 9, 9, 2, 1]);

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas
function calcTriangleArea(base, height) {
  let triangleArea = (base * height) / 2;
  return triangleArea;
}
calcTriangleArea();

function calcRectangleArea(base, height) {
  let rectangleArea = (base * height);
  return rectangleArea;

}
calcRectangleArea();

function calcAllAreas(base, height, form) {
  if (form === 'triângulo') {
    return `O valor da área do triângulo é de: ${calcTriangleArea(base, height)}`;

  } else if (form === 'retângulo') {
    return `O valor da área do retângulo é de: ${calcRectangleArea(base, height)}`;

  } else {
    return `Não foi possível fazer o cálculo, insira uma forma geométrica válida`;
  }

}
calcAllAreas();

// Desafio 7 - Crie a função catAndMouse
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = Math.abs(mouse - cat1);
  let distance2 = Math.abs(mouse - cat2);
  if (distance1 < distance2 && distance1 !== distance2) {
    return `cat1`;
  } else if (distance2 < distance1 && distance2 !== distance1) {
    return `cat2`;
  } else if (distance1 == distance2) {
    return `os gatos trombam e o rato foge`;
  }


}
catAndMouse(10, 5, 5);

// Desafio 8 - Crie a função fizzBuzz
function fizzBuzz(listNumbers) {
  let listStrings = []
  for (let i = 0; i < listNumbers.length; i++) {
    if (listNumbers[i] % 3 !== 0 && listNumbers[i] % 5 !== 0) {
      listStrings.push('bug!');
    } else if (listNumbers[i] % 3 == 0 && listNumbers[i] % 5 !== 0) {
      listStrings.push('fizz');
    } else if (listNumbers[i] % 5 == 0 && listNumbers[i] % 3 !== 0) {
      listStrings.push('buzz');
    } else if (listNumbers[i] % 3 == 0 && listNumbers[i] % 5 == 0) {
      listStrings.push('fizzBuzz');
    }
  }
  return listStrings;
}
fizzBuzz([2, 15, 7, 9, 45]);

// Desafio 9 - Crie a função encode e a função decode
function encode(word) {
  let newWord = ''
  for (let i = 0; i < word.length; i++) {
    if (word[i] === 'a') {
      let newLetter = word[i].replace('a', '1');
      newWord += newLetter;
    } else if (word[i] === 'e') {
      let newLetter = word[i].replace('e', '2');
      newWord += newLetter;
    } else if (word[i] === 'i') {
      let newLetter = word[i].replace('i', '3');
      newWord += newLetter;
    } else if (word[i] === 'o') {
      word[i].replace('o', '4');
    } else if (word[i] === 'u') {
      let newLetter = word[i].replace('u', '5');
      newWord += newLetter;
    } else if (word[i] === ' ') {
      newWord += ' ';
    }else{
      newWord+=word[i];
    }
  }
  return newWord;
}
encode('hi there!');

function decode(word){
  let decodeWord = ''
  for (let i = 0; i < word.length; i++) {
    if (word[i] === '1') {
      let newLetter = word[i].replace('1', 'a');
      decodeWord += newLetter;
    } else if (word[i] === '2') {
      let newLetter = word[i].replace('2', 'e');
      decodeWord += newLetter;
    } else if (word[i] === '3') {
      let newLetter = word[i].replace('3', 'i');
      decodeWord += newLetter;
    } else if (word[i] === '4') {
      word[i].replace('4', 'o');
    } else if (word[i] === '5') {
      let newLetter = word[i].replace('5', 'u');
      decodeWord += newLetter;
    } else if (word[i] === ' ') {
      decodeWord += ' ';
    }else{
      decodeWord+=word[i];
    }
  }
  return decodeWord;
}
decode('h3 th2r2!');
// Desafio 10 - Crie a função techList

// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => { }),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => { }),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => { }),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => { }),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => { }),
  concatName: typeof concatName === 'function' ? concatName : (() => { }),
  decode: typeof decode === 'function' ? decode : (() => { }),
  encode: typeof encode === 'function' ? encode : (() => { }),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => { }),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => { }),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => { }),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => { }),
  techList: typeof techList === 'function' ? techList : (() => { }),
};

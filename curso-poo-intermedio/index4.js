// function recursiva(numero) {
//   console.log(numero);
//   if (numero < 10) {
//     return recursiva(numero + 1);
//   } else {
//     return 10;
//   }
// }

// recursiva(1);

// function recursiva() {
//   if(/*Validación*/) {
//     //llamoados recursivos
//   } else {
//     //llamados normales
//   }
// }
const numbers = [2, 2, 21, 4, 7, 2, 7, 4, 2, 4, 6, 2, 3, 1, 2];
// let numero = 0;
// for (let i = 0; i < numeros.length; i++) {
//   numero = numeros[i];
//   console.log({ i, numero });
// }

function recursive(array) {
  if (array.length !== 0) {
    const first = array.shift();
    console.log(first);
    return recursive(array);
  }
  console.log('Finish');
}

recursive(numbers);

// Calcular promedio de strings: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:
// pista (typeof)

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(param) {
  // insert code
  let sum = 0;
  console.log(sum);

  for (let i = 0; i < param.length; i++) {
    const element = param[i];

    if (typeof element === 'string') {
      sum += element.length;
    } else {
      sum += element;
    }
  }

  return sum;
}

averageWord(mixedElements);
console.log(averageWord(mixedElements));

//! todo el rato hacia esta funcion y me salia, y resulta que hacia de más
// function averageWord(param) {
//   let sum = 0;
//   console.log(sum);

//   for (let i = 0; i < param.length; i++) {
//     const element = param[i];

//     if (typeof element === 'string') {
//       sum += element.length;
//     } else typeof element === 'number';
//     {
//       sum += element;
//     }
//   }

//   return sum;
// }

// averageWord(mixedElements);
// console.log(averageWord(mixedElements));

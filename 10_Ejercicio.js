// Calcular un promedio (media) es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
  // insert code
  let sum = 0;
  for (let i = 0; i < param.length; i++) {
    sum += param[i];
  }

  return sum;
}
console.log(average(numbers));
console.log(numbers.length);
let promedio = average(numbers) / numbers.length;
console.log(promedio);

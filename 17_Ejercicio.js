// Probando For...in: Usa un for...in para imprimir por consola los datos del alienígena.. Puedes usar este objeto:

const alien = {
  name: 'Wormuck',
  race: 'Cucusumusu',
  planet: 'Eden',
  weight: '259kg'
};
for (const key in alien) {
  if (alien.hasOwnProperty.call(alien, key)) {
    const element = alien[key];
  }
  console.log(alien[key]);
}

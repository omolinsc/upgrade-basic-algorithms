// 1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.

console.log("Bucle mostrando las vueltas desde 0 a 9");

for (var i = 0; i <= 9; i++) {
    console.log(i);
  }


console.log("---------------------");

// 1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo 
// cuando el resto del numero dividido entre 2 sea 0.

console.log("Bucle de 0 a 9 mostrando solo los números pares");

for (var n = 0; n <= 9; n++) {
    if (n % 2 === 0){
        console.log(n);
    }
  }


console.log("---------------------");

// 1.3 Crea un bucle para conseguir dormir contando ovejas. 
// Este bucle empieza en 0 y termina en 10. 
// Muestra por consola un mensaje diciendo 'Intentando dormir' en cada vuelta del bucle 
// y cambia el mensaje en la última vuelta a 'Dormido!'.

console.log("Contando ovejas hasta 10 si no me duermo antes...");

for (var p = 0; p <= 10; p++) {
    if ( p < 10 ){
        console.log("Intentando dormir - vuelta", p);
    }
    else{
        console.log("Dormido");
    }
  }
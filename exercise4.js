// 1.1 Consigue el valor "HULK" del array de cars y muestralo por consola.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

x = avengers.lastIndexOf("HULK");
console.log("Está HULK en el array?", avengers[x]);

// 1.2 Cambia el primer elemento de avengers a "IRONMAN"
// const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

avengers[0] = "IRONMAN";
console.log("Sale IRONMAN como el primero de la lista?",avengers);

// 1.3 Alert numero de elementos en el array usando la propiedad correcta de Array.
// const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

console.log("El array avengers tiene:",avengers.length, "elementos.");

// 1.4 Añade 2 elementos al array: "Morty" y "Summer". 
// Muestra en consola el último personaje del array
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

rickAndMortyCharacters.push("Morty","Summer");
const lastCharacter = rickAndMortyCharacters.length - 1;
console.log("El último personaje del array es:",rickAndMortyCharacters[lastCharacter]);

// 1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
// const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

rickAndMortyCharacters.push("Lapiz Lopez");
rickAndMortyCharacters.pop();

console.log("El primer elemento es:", rickAndMortyCharacters[0]);

const theLastChar = rickAndMortyCharacters.length - 1;

console.log("El último elemento es:", rickAndMortyCharacters[theLastChar]);


// 1.6 Elimina el segundo elemento del array y muestra el array por consola.
// const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

rickAndMortyCharacters.push("Lapiz Lopez");
rickAndMortyCharacters.splice(1,1);

console.log("Si eliminamos a Beth, después de Rick aparecerá Jerry:", rickAndMortyCharacters);
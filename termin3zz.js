let inputs = ['intro', 'about', 'tpdc', 'projects']

console.log("Welcome to the termin3zz alpha")
let userInput = prompt("Test input: ");

while (userInput !== 'exit') {
    if (inputs.includes(userInput)) {
        if (userInput === 'intro') {
         console.log("Yo I am Bit. And if you are read- nah I am kidding. The name's Ary! :)");
         userInput = prompt("Test input: ");
        }
    } else {
      console.log("invalid input");
    }
}
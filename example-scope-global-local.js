var a = 10; // declare a global scope
function inc() {
    a+=1;   // increment. Este escopo acessa variável do escopo "de fora"
    b = 11; // declare b. Quando se omite "var" o escopo não é travado,
            // implicitamente vira "escopo global"
    var c = 3; // declare c escopo "local". Existe somente enquanto
               // function inc() existir
}
inc();
console.log(a, b);
// console.log(c); // ReferenceError: c is not defined

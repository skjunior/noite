/*
* Sergio krug
*/


//Resposta 1

let A = 11;
let b = 4;
console.log(b);
b = 5;
console.log(A, b);

//Resposta 2

//nesse caso o conteudo das "caixas" são trocados.
// exemplo:
// let = 10 
//let = 20
// C passa a ter 10
//B passa a ser vazio
// A passa a ter 20

//Resposta 3

let trabalhoDia
let ganhoDia;

trabalhoDia = prompt("Quantas horas você trabalha por dia?");
ganhoDia = prompt("Quanto você recebe por dia?");
console.log("Você ganha", "R$", ganhoDia / trabalhoDia, "por hora.");

//exercicio de codigo 1

let nome;
let idade;
console.log(typeof idade);
console.log(typeof nome);

//creio que isso aconteceu por não ter sido atribuido valores nas variaveis,
//caso eu colocasse um determinado valor seria essa a "resposta" que apqreceria.

nome = prompt("Como você se chama?");
idade = prompt("Quantos anos você tem ?");
console.log("Olá", nome, "você tem", idade, "anos.");

//exercicio de codigo 2

let resposta1;

resposta1 = prompt("Você deseja continuar?");
if (resposta1 === "sim") {console.log("Muito bem!, proxima etapa.");  
} else if (resposta1 === "não") {
    console.log("Ok. Operação cancelada.");
} else {console.log("Responda apenas com 'Sim' ou 'Não'.");}

let pergunta1;
let pergunta2;

pergunta2 = prompt("Você acha que é possivel um virús zumbi?");
if(pergunta2 === "sim") {console.log("ok, proxima");
} else if (pergunta2 === "não") {
    console.log("Muito bem!");
} else {console.log("Apenas com 'sim' ou 'não'.");}


pergunta1 = prompt("Em um apocalipse zumbi, você mataria um amigo zumbi para sobreviver?");
if(pergunta1 === "sim") {console.log("ok, proxima");
} else if (pergunta1 === "não") {
    console.log("Muito bem!");
} else {console.log("Apenas com 'sim' ou 'não'.");}

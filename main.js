let idade = 21
let humano = true
let nome = "Marina"
let sobrenome = "Tiago"

if((idade >= 18)) {
    console.log("você é maior de idade")
}

if((idade >= 18) && (humano == true)) {
    console.log("Você é maior de idade e é humano.")
}

let aniversario = "Setembro"

if(`(aniversario == "Janeiro") || (aniversario == "Dezembro")`) {
    console.log("Você faz aniversário no verão.")
}

if(nome.substring(0,1) == "R") {
    console.log("Seu nome começa com a letra R")
}
else {
    console.log("Seu nome não começa com a letra R")
}

if(sobrenome.length > 6 || nome.substring(0,1) == "E") {
    console.log("Você atende um ou todos os critérios")
}
else {
    console.log("Você não atende nenhum dos critérios")
}
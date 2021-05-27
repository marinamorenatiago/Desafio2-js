let idade = 18
let humano = true
let nome = "Marina"
let sobrenome = "Tiago"

if((idade == 18)) {
    console.log("você é maior de idade")
}

if((idade == 18) && (humano == true)) {
    console.log("deu certo")
}

if(nome.substring(0) == "R") {
    console.log("Seu nome começa com a letra R")
}
else {
    console.log("Seu nome não começa com a letra R")
}

if(sobrenome.length > 6 || nome.substring(0) == "E") {
    console.log("Você atende um ou todos os critérios")
}
else {
    console.log("Você não atende nenhum dos critérios")
}
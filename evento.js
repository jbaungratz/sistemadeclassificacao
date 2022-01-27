let dataEvento = new Date('01/28/2022')
let dataHoje = new Date()

console.log(dataEvento)

if(dataEvento >= dataHoje) {
    console.log("Evento válido")
} else {
    console.log("Evento inválido")
}

let listaParticipantes = ["Danio", "Patrik", "Marcelo", "Alan", "Lígia"]

for(let contador = 0; contador < listaParticipantes.length; contador++) {
    console.log(listaParticipantes[contador])
}

// let idadeParticipante = 17

// if(idadeParticipante >= 18) {
//     console.log("")
// }

let pessoa = {
    nome: "Thiago",
    idade: 23
}

console.log(typeof(pessoa))
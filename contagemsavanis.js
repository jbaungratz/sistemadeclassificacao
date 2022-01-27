//Percorrer do 0 até o nº de alunos
// Verificar se o numero do aluno é par
//      Verdadeiro: Escrever na tela o numero é PAR
// Verificar se o numero do aluno é ímpar:
//      Verdadeiro: Escrever na tela o número é ÍMPAR.
// Verificar se o número é 0
//      Escrever na tela NUMERO ZERO



let numeroAlunos = 10;

for(let contador = 0; contador < numeroAlunos; contador++) {
    // Resto % -> Retorna o resto de uma divisão inteira
    if(contador == 0) {
        console.log(`O número é ZERO`)
    } else if(contador % 2 == 0) {
        //interpolação
        console.log(`O número ${contador} é PAR`)
    } else if(contador % 2 == 1) {
        console.log(`O número ${contador} é ÍMPAR`)
    }
}

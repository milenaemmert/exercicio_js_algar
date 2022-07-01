//variável global para podermos usar em todas as funções
let media

//função para calcular média
function calcularMedia(nota1, nota2) {
    media = (nota1 + nota2) / 2 //aqui estamos atribuindo um valor a variável média (linha 2)
    console.log(media)
}

calcularMedia(5, 7) //chamamos a função passando valores referentes a nota1, nota2


//função para verificar se o aluno foi aprovado
function verificarAprovacao() {
    if(media >= 6) {
        console.log('APROVADO.')
    } else {
        console.log('REPROVADO')
    }
}

verificarAprovacao()

//função para verificar se aluno é maior de idade
function verificarIdadeDoAluno() {
    let idadeDoAluno = 18

    if(media >= 6 || idadeDoAluno >= 18) {
        console.log('Leva o boletim para casa.')
    } else {
        console.log('Os responsáveis devem buscar o boletim na escola.')
    }
}

verificarIdadeDoAluno()




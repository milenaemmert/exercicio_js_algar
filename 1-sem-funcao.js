/* >> CALCULAR MÉDIA DAS NOTAS << */
let nota1 = 5
let nota2 = 8.5
//lembre-se da ordem de precedência, por isso usamos parênteses:
let media = (nota1 + nota2) / 2
console.log(media)

/* >> vERIFICAR SE O ALUNO FOI APROVADO << */
//se a média for maior ou igual a 6, aluno está aprovado
if(media >= 6) {
    console.log('APROVADO')
} else {
    //se não (se a média for menor que 6), aluno está reprovado
    console.log('REPROVADO')
}

/* >> DEIXAR ALUNO LEVAR BOLETIM PARA CASA OU NÃO << */
/*
  se aluno tem média maior ou igual a 6, ele leva o boletim para casa,
  OU se o aluno for maior de idade (independentemente da média), ele 
  também leva o boletim para a casa
*/
let idadeDoAluno = 17

if(media >= 6 || idadeDoAluno >= 18) {
    console.log('Leva o boletim para casa.')
} else {
    /* Agora, se a média for menor que 6 (ou seja, aluno está reprovado),
    e o aluno não é maior de idade, os responsáveis devem buscar o boletim.
    */
    console.log('Os responsáveis devem buscar o boletim na escola.')
}
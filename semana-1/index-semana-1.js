console.log("Semana 1")
//Projeto-integrador - semana 1

//1 pensar em algo (item) contavel e estruturado
//Criar 3 conjuntos de variáveis
let serie1 = "Outlander"
let temporadasOutlander = 6 
let temNaNetflix1 = true
let personagensPrincipais1 = ["Claire Fraser", " Jamie Fraser", " Jonathan Randall"]

let serie2 = "The Handmands Tale"
let temporadasTheHands = 5 
let temNaNetflix2 = false
let personagensPrincipais2 = ["June Osborne", " Serena Joy", " Comandante"]


let serie3 = "Greys Anatomy"
let temporadasGreys = 19
let temNaNetflix3 = false
let personagensPrincipais3 = ["Meredith Grey", " Derek Shepherd"," Cristina Yang"]

//3 fazendo calculo de média dos valores numericos
let mediaDeTemporadas = ((temporadasOutlander+temporadasTheHands+temporadasGreys)/3)
console.log(`A média de quantidade de temporadas de todas as séries é: ${mediaDeTemporadas}`) //imprime 10

//4 Checando se todas as variaveis apresentadas são verdadeiras
let todasTemNaNetflix = temNaNetflix1 && temNaNetflix2 && temNaNetflix3
console.log (todasTemNaNetflix)  // imprime false

//5 Crie mais uma caracteristica para o item que criou (series). Deve ser um array de mesmo tipo de dado

//Comando para Imprimir primeiro dado em maiusculo
let serie1Maiusculo = serie1.toUpperCase()
let serie2Maiusculo = serie2.toUpperCase()
let serie3Maiusculo = serie3.toUpperCase()

//6 imprima todos os dados
console.log("Imprimindo todos os dados:")
console.log (`${serie1Maiusculo} \n Numero de temporadas: ${temporadasOutlander} \n Titulo disponivel no streaming Netflix? ${temNaNetflix1} \n Principais personagens: ${personagensPrincipais1}`) 
console.log (`${serie2Maiusculo} \n Numero de temporadas: ${temporadasTheHands} \n Titulo disponivel no streaming Netflix? ${temNaNetflix2} \n Principais personagens: ${personagensPrincipais2}`) 
console.log (`${serie3Maiusculo} \n Numero de temporadas: ${temporadasGreys} \n Titulo disponivel no streaming Netflix? ${temNaNetflix3} \n Principais personagens: ${personagensPrincipais3}`)

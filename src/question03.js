var gol50 =leia.questionInt("digite quantidade de gol \n")
var passecerto10 = leia.questionInt("digite quantidade de passe certo \n")
var passeerrado05 = questionInt (" digite quantidade passe errado \n")

switch (gol) {
    case 0:
        var gol = 50 ("menor que 50")
       console.log("pessima partida") 
        break;
    case 1:
        var gol =("de 50 a 100")
        console.log(" partida ruim")
        break
    case 2:
        var gol =  ("de 100 a 150")
        console.log("fez o basico")
        break
    case 3: 
        var gol = ("de 150 a 200") 
        console.log( "foi bem na partida")
        break
    case 4:
        var gol= ( "acima de 200")
        console.log( "jogou demais")
        break
    default:
        console.log("fim de jogo")
        break;
}
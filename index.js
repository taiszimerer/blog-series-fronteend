series = [
    { 
       titulo: "Outlander",
       temporadas: 6,
       temNaNetflix: true,
       imagem: "outlander",
       personagensPrincipais: ["Claire Fraser", "Jamie Fraser", "Jonathan Randall"]
      },

      { 
     titulo: "The Handmands Tale",
       temporadas: 5,
       temNaNetflix: false,
       imagem: "hand",
       personagensPrincipais: ["June Osborne", "Serena Joy","Comandante"]
      },

      { 
       titulo: "Greys Anatomy",
       temporadas: 19,
       temNaNetflix: false,
       imagem: "greys",
       personagensPrincipais: ["Meredith Grey", "Derek Shepherd", "Cristina Yang"]
      },
    ]
console.log(series)

//Semana 6 - manipulando os objetos do HTML e do CSS utilizando o DOM

//errado
function relatorioDom (series){
    for(i in series){
        const cardsFeitosComDom = document.getElementsByClassName("cards")
        cardsFeitosComDom.innerHTML= series[i]
        return cardsFeitosComDom
    }
}
console.log(relatorioDom(series))


function pesquisa() {
    let input = document.getElementById('caixa-de-texto').value
    input=input.toLowerCase();
    let cards = document.getElementsByClassName('infoSeries')
 

  for (i = 0; i < cards.length; i++) { 
    if (!cards[i].innerHTML.toLowerCase().includes(input)) {
        cards[i].style.display="none";
    }
    else {
        cards[i].style.display="list-item";                 
    }
  } 
  
}

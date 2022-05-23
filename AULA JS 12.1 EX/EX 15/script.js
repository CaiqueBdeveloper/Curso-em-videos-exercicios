function verificar(){
    var data = new Date()
    var anoatual = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector("div#res")
    if (fano.value.length == 0 || fano.value > anoatual){
        window.alert("[ERRO]Verifique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = anoatual - Number (fano.value)
        var gênero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if (fsex[0].checked) { 
            gênero = "Homem"
        if(idade >=0  && idade < 10){
             //Criança
            img.setAttribute("src", "crcm.jpg")
           } else if (idade < 21 ) {
                //JOVEM
           img.setAttribute("src", "adcmenino.jpg")
           } else if  (idade < 50 ){
                //Adulto
              img.setAttribute("src", "hadul.jpg")
            } else {
              //idoso
            img.setAttribute("src", "hid.jpg")
            }
          } else if(fsex[1].checked) {
            gênero = "Mulher"
           if (idade >=0 && idade < 10){
            img.setAttribute("src", "crcma.jpg")  
               //Criança
           } else if (idade < 21) {
            img.setAttribute("src", "adcm.jpg")
               //JOVEM
           } else if (idade < 50 ){
            img.setAttribute("src", "madul.jpg")
             //adulto
            }else  {
                img.setAttribute("src", "mid.jpg")      
              //idoso
            }
          }
        res.style.textAlign = "center"
        res.innerHTML = ` ${gênero} Completa ${idade} anos em 2022.`
        res.appendChild(img)
    }
    
}
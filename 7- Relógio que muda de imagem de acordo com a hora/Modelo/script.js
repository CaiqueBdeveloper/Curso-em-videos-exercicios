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
        if (fsex[0].checked){ 
            gênero = "Homem"
            if (idade >=0 && idade < 10){
            //Criança
            
           } else if (idade < 21) {
            //JOVEM
           } else if (idade <21 ){
            //adulto
            }else  {
            //idoso
            }

        }   else if (fsex[1].checked){
            gênero = "Mulher"
        }   if (idade >=0 && idade < 10){
            //Criança
           } else if (idade < 21) {
            //JOVEM
           } else if (idade <21 ){
            //adulto
            }else  {
            //idoso
            }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`

        
    }
}

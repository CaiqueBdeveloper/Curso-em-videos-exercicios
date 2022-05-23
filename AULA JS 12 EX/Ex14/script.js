function carregar (){
    var intervalo = window.setInterval(() => {carregar()},1000);
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundos = data.getSeconds()

    msg.innerHTML  = `Agora são <strong>${hora}:${minuto}:${segundos}</strong> `
    if(hora >= 0 && hora < 12 ){
         // BOM DIA
        img.src = "imagemmanha.png"
        document.body.style.background = "#e2cd9f"
        // BOA TARDE
    }else if (hora >= 12 && hora < 18){
        img.src = "imagemtarde.png"
        document.body.style.background =  "#b9846f"
    } else {
        // BOA NOITE    
    img.src = "imagemnoite.png"
    document.body.style.background = "#515154"
    }
}
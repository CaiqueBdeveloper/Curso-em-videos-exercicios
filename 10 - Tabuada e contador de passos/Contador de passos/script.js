function contar(){
    let ini = document.querySelector("input#txti")
    let fim = document.querySelector("input#txtf")
    let passo = document.querySelector('input#txtp')
    let res = document.querySelector("div#res")

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert("ERRO Faltam dados!")
        res.innerHTML =  ("Impossível contar!")
}else {
    res.innerHTML = "Contando : <br> "
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    if (p <= 0 ){
        alert("Passo inválido Considerando PASSO 1")
        p = 1
    }

    if(i < f ){
        //Contagem crescente 
        for(let c = i; c <= f; c += p  ) {
            res.innerHTML += `${c} \u{1F449}`
        }
 }else {
        // Contagem regressiva 
     for(let c = i; c >= f; c -= p){
         res.innerHTML += `${c} \u{1F449}`
     }
    
 }
    res.innerHTML += ` \u{1F3C1}`

 

}

}






/*function calcular() {
    var txtv = window.document.querySelector("input#txtvel")
    var res = window.document.querySelector(" div#resultado")
    var vel = Number(txtv.value)
    res.innerHTML = `<p>Sua velocidade atual é de <Strong> ${vel} Km/h</Strong></p>`
    if (vel > 60 ){
        res.innerHTML += "<p>Você está <strong>Multado!</Strong> por excesso de velocidade </p>"
    }
    res.innerHTML += "<p>Dirija sempre com cinto de segurança!</p>"
}
</script>*/
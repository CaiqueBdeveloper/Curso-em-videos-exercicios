let num = [5, 8 , 2 , 9 , 3]
num.push(1)
num.sort()
console.log(num)
console.log (`O vetor tem  ${num.length} elementos`)  
console.log(`o primeiro valor do vetor é ${num[0]} o segundo é ${num[1]}` )

let pos = num.indexOf(8)
if(pos == - 1  ){
    console.log(" Valor não encontrado")
}else{
    console.log(`O valor 8 está na posição ${pos}`)
}

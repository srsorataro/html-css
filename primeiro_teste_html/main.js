function pularLinha(){
    document.write('<br>')
    document.write('<br>')

}
function mostrar(frase){
    document.write(frase)
    pularLinha()
   

}
let numeroPen =  Math.round(Math.random() *10)
let chute = parseInt(prompt("digite oseu numero"))

if(chute == numeroPen){
    mostrar("Acertou"+numeroPen)
}
if(chute > numeroPen){
 mostrar("Grande demais"+numeroPen)
}
if(chute < numeroPen){
    mostrar("pequeno demais"+numeroPen)
}
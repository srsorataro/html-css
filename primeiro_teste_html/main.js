function pularLinha(){
    document.write('<br>')
    document.write('<br>')

}
function mostrar(frase){
    document.write(frase)
    pularLinha()
   

}
let anoCopa   = 1930


while(anoCopa <= 2016){
    alert('Teve coppa em'+ anoCopa)

    anoCopa = anoCopa + 4
}
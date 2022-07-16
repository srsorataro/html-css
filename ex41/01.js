somar(10)
function somar(limite){
    let mutiploDe3 = 0
    let mutiploDe5 = 0
    for(i = 0; i <= limite; i++){

        if( i % 3 === 0)
        mutiploDe3 += i
        if(i % 5 === 0)
        mutiploDe5 += i

    } 
    console.log(mutiploDe3 +mutiploDe5)   

}
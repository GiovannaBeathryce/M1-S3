
let competidores= ['Rafael','Manoel','Daniel']
let podio= ''
let posicoes= ''


function positions (firstPlace, secondPlace, lastPlace){

    if(firstPlace == 'Daniel')
    {
     posicoes += '1º - Colocado' + ': ' + firstPlace + '<br>'
     posicoes += '2º - Colocado ' + ': ' + secondPlace + '<br>'
     posicoes += '3º - Colocado' + ': ' + lastPlace + '<br>'
    }
     if(secondPlace == 'Daniel')
   {
    posicoes +=  '1º - Colocado' + ': ' + secondPlace + '<br>'
    posicoes +=  '2º - Colocado' + ': ' + firstPlace + '<br>'
    posicoes +=  '3º - Colocado' + ': ' + lastPlace + '<br>'
   }
   if(lastPlace == 'Daniel')
   {
    posicoes += '1º - Colocado' + ': ' + firstPlace + '<br>'
    posicoes += '2º - Colocado' + ': ' + lastPlace + '<br>'
    posicoes += '3º - Colocado' + ': ' + secondPlace + '<br>'
   }
     

return posicoes

}

podio=positions(competidores[0],competidores[1],competidores[2])

output.innerHTML = podio

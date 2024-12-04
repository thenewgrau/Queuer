async function pegarCoisa(){
    const resposta = await fetch("https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=pt-BR")
    const aguaComGas = await resposta.json();
    console.log(aguaComGas);

    for(let i = 0; i < aguaComGas.data.length; i++){
        console.log(aguaComGas.data[i].displayName)
        console.log(aguaComGas.data[i].abilities)
    }
} 

pegarCoisa();

window.addEventListener('scroll', function() {
    var texto = document.getElementById('textoValorant');
    
    if (window.scrollY > 100) {
        texto.classList.add('fade-out');
    }else {
        texto.classList.remove('fade-out');
    }
});

window.addEventListener('scroll', function(){
    var barraCima = document.getElementsByClassName('containerCima')[0];
    
    if (window.scrollY > 10){
        barraCima.classList.add('desce-foda');
    }else{
        barraCima.classList.remove('desce-foda')
    }
})


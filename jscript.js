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
    
    if (window.scrollY > 100){
        barraCima.classList.add('desce-foda');
    }else{
        barraCima.classList.remove('desce-foda')
    }
})

window.addEventListener('scroll', function(){
    var hrFoda1 = document.getElementById('hrum')

    if(window.scrollY > 100){
        hrFoda1.classList.add('agaerre-nada')
    }else{
        hrFoda1.classList.remove('agaerre-nada')
    }

})

window.addEventListener('scroll', function(){
    var hrFoda2 = document.getElementById('hrdois')

    if(window.scrollY > 500){
        hrFoda2.classList.add('agaerre-nada')
    }else{
        hrFoda2.classList.remove('agaerre-nada')
    }

})

window.addEventListener('scroll', function(){
    var hrFoda3 = document.getElementById('hrtres')

    if(window.scrollY > 500){
        hrFoda3.classList.add('agaerre-nada')
    }else{
        hrFoda3.classList.remove('agaerre-nada')
    }

})

window.addEventListener('scroll', function(){
    var hrFoda4 = document.getElementById('hrquatro')

    if(window.scrollY > 800){
        hrFoda4.classList.add('agaerre-nada')
    }else{
        hrFoda4.classList.remove('agaerre-nada')
    }

})




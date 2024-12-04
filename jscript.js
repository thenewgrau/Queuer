async function pegarCoisa() {
    const resposta = await fetch("https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=pt-BR");
    const aguaComGas = await resposta.json();
    let personagensContainer = document.getElementsByClassName('personagens')[0];  // Select container for agents

    console.log(aguaComGas);

    // Loop through the agents data
    for (let i = 0; i < aguaComGas.data.length; i++) {
        const agent = aguaComGas.data[i];
        console.log(agent.displayName);
        console.log(agent.abilities);

        // Create HTML content for this agent
        let agentHTML = `
            <div class="personagem">
                <div id="cadaum">
                    <img id='perso' src="${agent.displayIcon}" alt="${agent.displayName}">
                    <h3>${agent.displayName}</h3>
                </div>
                    <div class="habilidades">
        `;

        // Loop through abilities for this agent and add them under the agent
        for (let j = 0; j < agent.abilities.length; j++) {
            agentHTML += `
                <p><strong>Habilidade ${j + 1}: </strong>${agent.abilities[j].displayName}</p>
                <p>${agent.abilities[j].description}</p>
            `;
        }

        // Close the agent div and add it to the container
        agentHTML += `</div></div>`;
        personagensContainer.innerHTML += agentHTML;
    }
}



pegarCoisa();

window.addEventListener('scroll', function() {
    var texto = document.getElementById('textoValorant');
    
    if (window.scrollY > 1500) {
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
    var hr = document.getElementsByClassName('hrum')[0]

    if(window.scrollY >= 0 && window.scrollY <= 1000){
        hr.classList.remove('hrum-liga')
    }else{
        hr.classList.add('hrum-liga')
    }
})

window.addEventListener('scroll', function(){
    var hr = document.getElementsByClassName('hrdois')[0]

    if(window.scrollY > 1000 && window.scrollY <= 1900){
        hr.classList.add('hrdois-liga')
    }else{
        hr.classList.remove('hrdois-liga')
    }
})

window.addEventListener('scroll', function(){
    var hr = document.getElementsByClassName('hrtres')[0]

    if(window.scrollY > 1900){
        hr.classList.add('hrtres-liga')
    }else{
        hr.classList.remove('hrtres-liga')
    }
})



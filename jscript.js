async function pegarCoisa() {
    const resposta = await fetch("https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=pt-BR");
    const aguaComGas = await resposta.json();
    let personagensContainer = document.getElementsByClassName('personagens')[0];

    for (let i = 0; i < aguaComGas.data.length; i++) {
        console.log(aguaComGas.data[i].abilities.displayIcon)
        const agent = aguaComGas.data[i];
    
        let agentHTML = `
            <div class="personagem">
                <div id="cadaum">
                    <img class='perso' id="${agent.displayName}" src="${agent.displayIcon}" alt="${agent.displayName}">
                    <h3>${agent.displayName}</h3>
                </div>
                <div class="habilidades habilidades-${agent.displayName}">
        `;

        personagensContainer.innerHTML += agentHTML;
    }
    personagensContainer.addEventListener("click", function (event) {
        // Verifique se o elemento clicado é uma imagem com a classe 'perso'
        if (event.target && event.target.classList.contains('perso')) {
            const agentName = event.target.id;
            console.log(`Agente clicado: ${agentName}`);
    
            let filinhoDePapai = document.getElementsByClassName(`habilidades-${agentName}`)[0];
            console.log(filinhoDePapai);
    
            const agent = aguaComGas.data.find(agent => agent.displayName === agentName);
            console.log(agent);

            if (agent) {

                let descriptionHTML = "";
                for(let i = 0; i < agent.abilities.length;i++){
                    // console.log(agent.abilities[i])
                     descriptionHTML += `
                         <div id='descricao'>
                             <p>${agent.description}</p>
                             <img id='icon' src='${agent.abilities[i].displayIcon}' alt='era pra ter algo aqui...'>
                         </div>
                     `;
                }
                filinhoDePapai.innerHTML += descriptionHTML; 
    
                // let descriptionContainer = filinhoDePapai.querySelector('#descricao');
                // console.log(descriptionContainer);

    
                // if (descriptionContainer) {

                //     descriptionContainer.remove();
                // } else {
                //     for (x = 0; x < agent.abilities.length; x++) {
                //         const agentIcone = aguaComGas.data.find(agent => agent.displayName === agentName)
                //     };
                //     let descriptionHTML = `
                //         <div id='descricao'>
                //             <p>${agent.description}</p>
                //             <img id='icon' src='${agent.abilities[1].displayIcon}' alt='era pra ter algo aqui...'>
                //         </div>
                //     `;
                //     console.log(agent.description);
                //     filinhoDePapai.innerHTML += descriptionHTML; 
                // }
            } else {
                console.log("Agente não encontrado.");
            }
        }
    });
    
    
}

pegarCoisa();

window.addEventListener('scroll', function () {
    var texto = document.getElementById('textoValorant');

    if (window.scrollY > 1200 || window.scrollY < 800) {
        texto.classList.add('fade-out');
    } else {
        texto.classList.remove('fade-out');
    }
});

window.addEventListener('scroll', function () {
    var barraCima = document.getElementsByClassName('containerCima')[0];

    if (window.scrollY > 100) {
        barraCima.classList.add('desce-foda');
    } else {
        barraCima.classList.remove('desce-foda')
    }
})

window.addEventListener('scroll', function () {
    var hr = document.getElementsByClassName('hrum')[0]

    if (window.scrollY >= 0 && window.scrollY <= 1000) {
        hr.classList.remove('hrum-liga')
    } else {
        hr.classList.add('hrum-liga')
    }
})

window.addEventListener('scroll', function () {
    var hr = document.getElementsByClassName('hrdois')[0]

    if (window.scrollY > 1000 && window.scrollY <= 1900) {
        hr.classList.add('hrdois-liga')
    } else {
        hr.classList.remove('hrdois-liga')
    }
})

window.addEventListener('scroll', function () {
    var hr = document.getElementsByClassName('hrtres')[0]

    if (window.scrollY > 1900) {
        hr.classList.add('hrtres-liga')
    } else {
        hr.classList.remove('hrtres-liga')
    }
})



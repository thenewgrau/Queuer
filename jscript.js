async function pegarCoisa() {
    const resposta = await fetch("https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=pt-BR");
    const aguaComGas = await resposta.json();
    let personagensContainer = document.getElementsByClassName('personagens')[0];
    let icone = document.getElementById('icon')

    for (let i = 0; i < aguaComGas.data.length; i++) {
        const agent = aguaComGas.data[i];
        let agentHTML = `
            <div class="personagem">
                <div id="cadaum">
                    <img class='perso' id="${agent.displayName}" src="${agent.displayIcon}" alt="${agent.displayName}">
                    <h3>${agent.displayName}</h3>
                </div>
                <div class="habilidades habilidades-${agent.displayName}">
        `;

        for (let j = 0; j < agent.abilities.length; j++) {
            agentHTML += `
                <div class="descricao">
                    <h3> ${agent.abilities[j].displayName} </h3>
                    <img id="ability-icon" href="${agent.displayName}" src="${agent.abilities[j].displayIcon}" alt="Icone habilidade">
                </div>
            `;
        }
        agentHTML += `</div></div>`;
        personagensContainer.innerHTML += agentHTML;
    };

    personagensContainer.addEventListener("click", function (event) {
        if (event.target && event.target.classList.contains('perso')) {
            const agentName = event.target.id;
            const abilitiesContainer = document.getElementsByClassName(`habilidades-${agentName}`)[0];

            if (abilitiesContainer.style.display === "flex") {
                abilitiesContainer.style.display = "none";
                
            } else {
                abilitiesContainer.style.display = "flex";
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

    if (window.scrollY > 1900 && window.scrollY <= 14500) {
        hr.classList.add('hrtres-liga')
    } else {
        hr.classList.remove('hrtres-liga')
    }
})

window.addEventListener('scroll', function () {
    var hr = document.getElementsByClassName('hrquatro')[0]

    if (window.scrollY >= 14500) {
        hr.classList.add('hrquatro-liga')
    } else {
        hr.classList.remove('hrquatro-liga')
    }
})
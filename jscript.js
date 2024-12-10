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
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;
    
    if (window.innerWidth <= 768) {
        if (scrollPosition > 600 || scrollPosition < 300) {
            texto.classList.add('fade-out');
        } else {
            texto.classList.remove('fade-out');
        }
    } else {
        if (scrollPosition > 1200 || scrollPosition < 800) {
            texto.classList.add('fade-out');
        } else {
            texto.classList.remove('fade-out');
        }
    }
});


// Função para lidar com o scroll
window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY || document.documentElement.scrollTop; // Compatibilidade entre navegadores
    var barraCima = document.getElementsByClassName('containerCima')[0];
    var hrum = document.getElementsByClassName('hrum')[0];
    var hrdois = document.getElementsByClassName('hrdois')[0];
    var hrtres = document.getElementsByClassName('hrtres')[0];
    var hrquatro = document.getElementsByClassName('hrquatro')[0];

    // Comportamento para 'containerCima'
    if (scrollPosition > 100) {
        barraCima.classList.add('desce-foda');
    } else {
        barraCima.classList.remove('desce-foda');
    }

    // Condições de rolagem para os elementos <hr>
    if (window.innerWidth <= 768) { // Dispositivos móveis
        // Para dispositivos móveis, os intervalos podem ser mais compactos
        if (scrollPosition <= 300) {
            hrum.classList.remove('hrum-liga');
        } else {
            hrum.classList.add('hrum-liga');
        }

        if (scrollPosition > 230 && scrollPosition <= 1100) {
            hrdois.classList.add('hrdois-liga');
        } else {
            hrdois.classList.remove('hrdois-liga');
        }

        if (scrollPosition > 1100 && scrollPosition <= 15000) {
            hrtres.classList.add('hrtres-liga');
        } else {
            hrtres.classList.remove('hrtres-liga');
        }

        if (scrollPosition >= 15000) {
            hrquatro.classList.add('hrquatro-liga');
        } else {
            hrquatro.classList.remove('hrquatro-liga');
        }
    } else { // Para desktops
        // Para desktops, podemos manter os intervalos originais
        if (scrollPosition <= 1000) {
            hrum.classList.remove('hrum-liga');
        } else {
            hrum.classList.add('hrum-liga');
        }

        if (scrollPosition > 1000 && scrollPosition <= 1900) {
            hrdois.classList.add('hrdois-liga');
        } else {
            hrdois.classList.remove('hrdois-liga');
        }

        if (scrollPosition > 1900 && scrollPosition <= 14500) {
            hrtres.classList.add('hrtres-liga');
        } else {
            hrtres.classList.remove('hrtres-liga');
        }

        if (scrollPosition >= 14500) {
            hrquatro.classList.add('hrquatro-liga');
        } else {
            hrquatro.classList.remove('hrquatro-liga');
        }
    }
});

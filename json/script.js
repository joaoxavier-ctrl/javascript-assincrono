fetch('./dados.json')
.then(r => r.json())
.then(json => {
    json.forEach(materia => {
        console.log(materia.aula);
    });
});

const configuracoes = {
    player: 'Google',
    tempo: 25.5,
    aula: '2.1 JavaScript',
}

localStorage.player = "Google";

const stringConfig = JSON.stringify(configuracoes);

console.log(stringConfig);
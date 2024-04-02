async function puxarDados(){
    try{
        const responseDados = await fetch('./dados.json');
        const jsonDados = await responseDados.json();
        document.body.innerText = jsonDados.aula;
        console.log(responseDados);
    } catch(erro){
        console.log(erro);
    }
}

puxarDados();
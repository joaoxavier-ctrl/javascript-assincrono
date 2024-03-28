/*
const doc = fetch('./doc.txt');

doc.then(resolucao => {
    return resolucao.text();   
}).then((body) => {
    const conteudo = document.querySelector('.conteudo');
    conteudo.innerText = body;
})
*/


/*
const cep = fetch('https://viacep.com.br/ws/01001000/json/')
const style = fetch('./style.css');

cep.then(r => r.json())
.then(body => {
    console.log(body.logradouro);
    const conteudo = document.querySelector('.conteudo');
    conteudo.innerText = body.logradouro;
    const style = document.createElement('style');
    style.innerHTML = body;
    console.log(style);
    conteudo.appendChild() = style;
});*/

/*
style.then(r => {
    return r.text();
}).then((body) => {
    console.log(body);
})*/

const sobre = fetch('./sobre.html');

const div = document.createElement('div');


sobre.then(r => r.text())
.then(body => {
    console.log(body);
    div.innerHTML = body;
    const titulo = div.querySelector('h1');
    console.log(titulo);
    document.querySelector('h1').innerText = titulo.innerText;
    console.log(div);
});
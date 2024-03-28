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

/*
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
});*/

const cep = fetch('https://viacep.com.br/ws/01001000/json/')
const imagem = fetch('./imagem.png');

/*
imagem.then(r => r.blob())
.then(body => {
    const blobUrl = URL.createObjectURL(body);
    console.log(blobUrl);
    const imagemDom = document.querySelector('img');
    imagemDom.src = blobUrl;
    console.log(body);
});*/

imagem.then(response => {
    console.log(response);
    response.headers.forEach(console.log);
});

cep.then(r => {
    const r2 = r.clone();
    r.text().then((text) => {
        console.log(text);
    })
    r2.json().then((json) => {
        console.log(json);
    });
    console.log(r);
})
.then(body => {
    console.log(body);
})
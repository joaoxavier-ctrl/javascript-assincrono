/*
const  promessa = new Promise((resolve, reject) => {
    let condicao = true;
    if(condicao){
        setTimeout(() => {
            resolve({nome: 'João', idade: 23});
        }, 1000)
    }else{
        reject(Error('Um erro ocorreu na promise'));
    }
});

const retorno = promessa
.then(resolucao => {
    console.log(resolucao);
    resolucao.profissao = 'Designer';
    return resolucao;
})
.then(resolucao => {
    console.log(resolucao);
}, rejeitada => { //catch direto depois do then
    console.log('Catch');
    console.log(rejeitada);
})
.finally(() => {
    console.log('EU TENTEIIII')
})

console.log(retorno);
*/

const login = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Usuario logado');
    }, 1000)
})

const dados = new Promise((resolve) => { 
    setTimeout(() => {
        resolve('Dados carregados')
    }, 1500)
})

const carregouTudo = Promise.all([login, dados]);

carregouTudo.then((resolucao) => {
    console.log(resolucao);
})
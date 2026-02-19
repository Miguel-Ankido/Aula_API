import express from "express";

const api = express();

api.get('/hello', (req, resp) => {
  resp.send('hello word!')  
})


api.get('/suave/:nome', (req, resp) => {
    let nome = req.params.nome;
    resp.send('Suave ' + nome + '?')
})

api.get('/tranquilo', (req, resp) => {
    let nome = req.query.nome;
    resp.send('Tranquilo ' + nome + '?')
})

api.get('/dobro', (req, resp) => {
    let numero = Number(req.query.numero);
    let dobro = numero * 2;
    resp.send('O dobro é ' + dobro);
})
api.get('/somar' , (req,resp) =>{
    let numero1 = Number(req.query.numero1);
    let numero2 = Number(req.query.numero2);
    let somar = numero1 + numero2;
    resp.send ('A soma de ambos é: ' + somar);
})

api.get('/media/:nota1/:nota2/:nota3', (req, resp) => {
    let nota1 = Number (req.params.nota1);
    let nota2 = Number (req.params.nota2);
    let nota3 = Number(req.params.nota3);
    let media = Number (nota1 + nota2 + nota3)/3;
    let situacao = media >= 6 ? 'Aprovado' : 'Reprovado';
    
    resp.send('Média: ' + media + '.Situação: ' + situacao)
})

api.listen(5010, ()=> console.log('API subiu!'));
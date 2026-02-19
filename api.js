import express from "express";
const api = express();
api.use(express.json());

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

//api.get('/media/:nota1/:nota2/:nota3', (req, resp) => {
  //  let nota1 = Number (req.params.nota1);
//     let nota2 = Number (req.params.nota2);
//    let nota3 = Number(req.params.nota3);
//    let media = Number (nota1 + nota2 + nota3)/3;
//   let situacao = media >= 6 ? 'Aprovado' : 'Reprovado';
    
//   resp.send('Média: ' + media + '.Situação: ' + situacao)
//})
//_______________________________________________________.._______________________________________________________________________
api.get('/calculadora/somar/:num1/:num2', (req, resp) => {
    let n1 = Number(req.params.num1);
    let n2 = Number(req.params.num2);
    let s = n1+n2;
    resp.send({
            soma: s
    });
}) //http://localhost:5010/calculadora/somar/7/5



api.get('/calculadora/subtrair', (req, resp) => {
    let n1 = Number(req.query.num1);
    let n2 = Number(req.query.num2);
    let sub = n1 - n2;
    resp.send({
            subtracao: sub
    });
}) //http://localhost:5010/calculadora/subtrair?num1=10&num2=4


api.post('/calculadora/multiplicar', (req, resp) => {
    let dados = req.body;
    let mult = dados.n1 * dados.n2;
    resp.send({
            multiplicacao: mult
    }) //http://localhost:5010/calculadora/multiplicar
})
//opcao 2 
// let n1 = Number(req.body.n1);
// let n2 = Number(req.body.n2);
// let mult = n1 * n2;

//opcao 3 
//let (n1, n2) = req.body;
// let mult = n1 * n2;

api.get('/media1/:nota1/:nota2/:nota3', (req, resp) => {
 let nota1 = Number (req.params.nota1);
 let nota2 = Number (req.params.nota2);
 let nota3 = Number(req.params.nota3);
let media = Number (nota1 + nota2 + nota3)/3;
let situacao = media >= 6 ? 'Aprovado' : 'Reprovado';

resp.send('Média: ' + media + 'situação: ' + situacao)
}) //http://localhost:5010/media/10/4/6

api.get('/media2' , (req,resp) =>{
    let n1 = Number(req.query.n1);
    let n2 = Number(req.query.n2);
    let media = (n1 + n2)/2;
    resp.send ('Média:' + media);
})// http://localhost:5010/media2?n1=7&n2=10

api.post('/media3', (req, resp) => {

    let media3 = (req.body.n1 + req.body.n2 + req.body.n3)/3;
    let situacao = media3 >= 6 ? 'Aprovado' : 'Reprovado';
    resp.send({
        media: media3,
        situacao: situacao
    })//http://localhost:5010/media3
})

api.post ('/media4/:n1', (req, resp) => {
    let n1 = Number(req.params.n1);
    let n2 = Number(req.query.n2);

    let dados = req.body;
    let n3 = Number(dados.n3);
    let media =(n1 + n2 + n3)/3;
    let situacao = media >= 6 ? 'Aprovado' : 'Reprovado';
    resp.send({
        media: media,
        situacao: situacao})
    })//http://localhost:5010/media4/5?n2=8


    api.post('/media/alunos/relatorio', (req, resp) => {
        let listaAlunos = req.body.alunos;
    
        let relatorio = listaAlunos.map(aluno => {
            // Calcula a soma das notas do aluno atual
            let soma = aluno.notas.reduce((acc, nota) => acc + nota, 0);
            
            // Calcula a média
            let media = soma / aluno.notas.length;
            
            // Retorna um novo objeto com o nome, média formatada e situação
            return {
                nome: aluno.nome,
                media: Number(media.toFixed(1)),
                situacao: media >= 6 ? 'Aprovado' : 'Reprovado'
            };
        });
    
        resp.send(relatorio);
    });




api.listen(5010, ()=> console.log('API subiu!'));
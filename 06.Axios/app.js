import axios from 'axios';

axios.get('https://67620a7446efb3732373870b.mockapi.io/api/product') //requisição tipo get

//se tiver sucesso mostra os dados completos, .data pra mostrar apenas o que importa
.then(response => {
    console.log(response.data)
})

//se der erro
.catch(err => {
    console.error("Erro ao fazer a requisição GET:", err)
})

//finaliza o processo
.finally(done => {
    console.log("OK")
})

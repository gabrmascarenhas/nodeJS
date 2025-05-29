import axios from 'axios';

//dados fixos (simulação)
const product = {
    image: "https://cdn.pixabay.com/photo/2025/04/02/09/50/cat-9508590_1280.jpg",
    name: "Gato",
    description:"Gato ---> Gatão",
    price: 9999.99
}


const urlmock = 'https://67620a7446efb3732373870b.mockapi.io/api/product';
registerProduct(product);


function registerProduct(product){
    axios.post(urlmock, product)
    .then((response) => {
        console.log(response.status);
        console.log(response.data);
    })
        .catch(err => {
            console.error("Erro ao cadastrar produto: ", err)
        })
        .finally(() => {
            console.log("Requisição POST finalizada")
        })
    }
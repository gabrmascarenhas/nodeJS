import axios from 'axios';

//dados fixos (simulação)
const product = {
    image: "https://cdn.pixabay.com/photo/2025/04/02/09/50/cat-9508590_1280.jpg",
    name: "Gato",
    description:"Gato ---> Gatão",
    price: 9999.99
}
const updProduct = {
    // image: "https://cdn.pixabay.com/photo/2025/04/02/09/50/cat-9508590_1280.jpg",
    name: "Gatão",
    description:"Tem um gatão te olhando pelo jeito das coisas",
    price: 99.99
}


const urlmock = 'https://67620a7446efb3732373870b.mockapi.io/api/product';
const id = 3;


async function registerProduct(product){
    await axios.post(urlmock, product)
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


async function AllProduct(){
        axios.get(urlmock)
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
                console.error("Erro ao buscar produto: ", err);
            })
            .finally(() => {
                console.log("Requisição GET finalizada.")
            })
    }
async function getProduct(id){
        axios.get(`${urlmock}/${id}`)
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
                console.error("Erro ao buscar produto: ", err);
            })
            .finally(() => {
                console.log("Requisição GET finalizada.")
            })
    }

    async function deleteProduct(id){
    await  axios.delete(`${urlmock}/${id}`)
            .then(response => {
              console.log(response.status + ": Produto excluído");
            })
            .catch(err => {
                console.error("Erro ao buscar produto: ", err);
            })
            .finally(() => {
                console.log("Requisição DELETE finalizada.")
            })
    }

  async function updateProduct(id, updProduct){
        axios.put(`${urlmock}/${id}`, updProduct)
            .then(response => {
                console.log(response.status + ": Produto updated");
            })
            .catch(err => {
                console.error("Erro ao buscar produto: ", err);
            })
            .finally(() => {
                console.log("Requisição PUT finalizada.");
            })
    }
// await registerProduct(product);
await  AllProduct(id);
// await  getProduct(id);
// await deleteProduct(id);
await updateProduct(id, updProduct);
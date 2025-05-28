const formCad = document.querySelector("#formCad");

formCad.addEventListener("submit", (e) => {
    e.preventDefault();
    SignUpUser();
});

function SignUpUser() {
    const nome = formCad.nome.value;
    const email = formCad.email.value;
    const senha = formCad.senha.value;

    if (!nome || !email || !senha) {

    }

    const host = 'localhost';
    const port = 3300;
    const endpoint = `http://${host}:${port}/api/users`;

    fetch(endpoint, {
        method: "POST",
        headers: { 'Content-Type': "application/json" }, 
        body: JSON.stringify({
            nome: nome,
            email: email,
            senha: senha
        })
    })
    .then(response => response.json()) // 
    .then(data => {
        if(data.erro){
            mostrarMensagem(data.erro);
        } else {
            mostrarMensagem(data.mensagem, data.usuario);
        }
    })
    .catch(() => {
        mostrarMensagem("Erro ao acessar API");
    });
}
const toast = document.querySelector('.toast');

function mostrarMensagem(mensagem, duracao = 3000) {
    toast.textContent = mensagem;
    toast.classList.add('show');

    // Remove o toast após N segundos
    setTimeout(() => {
        toast.classList.remove('show');
    }, duracao); // 1 segundo == 1000 milis
}

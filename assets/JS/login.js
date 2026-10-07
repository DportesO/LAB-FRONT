const email = "admin@email.com";
const senha = "1234";

function verificarCredenciais() {
    const emailInformado = document.getElementById("email").value;
    const senhaInformada = document.getElementById("senha").value;

    if (emailInformado === email) {
        alert("E-mail informadocorretamente.");
        if (senhaInformada === senha) {
            alert("Senha informada corretamente.");
        window.location.href = "home.html";

        } else {
            alert("Senha incorreta. Tente novamente.");
        }
    } else {
        alert("E-mail incorreto. Tente novamente.");
    }
}
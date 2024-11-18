function validarFormulario() {
    const email = document.getElementById("email").value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(email)) {
        alert("Por favor, insira um e-mail válido.");
        return false;
    }
    return true;
}

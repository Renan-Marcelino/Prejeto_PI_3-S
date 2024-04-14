function validarFormulario() {
    var nomePerfil = document.getElementById("nomePerfil").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    var confirmarSenha = document.getElementById("confirmarSenha").value;

    // Validação do campo de email
    var emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    // Validação da senha: mínimo de 8 caracteres, pelo menos uma letra maiúscula e um número
    var senhaValida = /^(?=.*[A-Z])(?=.*\d).{8,}$/.test(senha);

    // Verificação se as senhas são compatíveis
    var senhasCompativeis = senha === confirmarSenha;

    // Exibindo mensagens de erro caso necessário
    if (!emailValido) {
        alert("Por favor, insira um email válido.");
        return false;
    }

    if (!senhaValida) {
        alert("A senha deve conter no mínimo 8 caracteres, incluindo pelo menos uma letra maiúscula e um número.");
        return false;
    }

    if (!senhasCompativeis) {
        alert("As senhas digitadas não são iguais.");
        return false;
    }

    // Se todas as validações passarem, o formulário pode ser enviado
    return true;
}
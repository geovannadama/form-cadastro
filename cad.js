function Verificar() {
    let nome = document.getElementById('nome').value;
    let telefone = document.getElementById('telefone').value;
    let nascimento = document.getElementById('nascimento').value;
    let cpf = document.getElementById('cpf').value;
    let endereco = document.getElementById('endereco').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
    let csenha = document.getElementById('csenha').value;

    if(!email || !senha || !csenha || !endereco || !cpf || !nascimento || !telefone || !nome){
        alert("Campos de preenchimento obrigatório. Favor preencher.")
    }
}
var acessoConcedido = ''; 

function validaUsuario() {
    var usuarios = JSON.parse(localStorage.getItem('dbPF') || '[]');
    var login = $('#emailLogin').val();
    var senha = $('#senhaLogin').val();

    const index = usuarios.registro.map(object => object.email && object.password).indexOf(login && senha);

    if(index > -1){
        acessoConcedido = true;
    }else{
        acessoConcedido = false;
    };
}


$(document).ready(function () {
    $('#entrar').on('click', function () {
        
        validaUsuario();

        if(acessoConcedido === true){
            $('#entrar').attr('href', '../../Painel/html/index.html');
        }else{
            alert('Usuário e/ou senha inválidos.');
        };
    });
});
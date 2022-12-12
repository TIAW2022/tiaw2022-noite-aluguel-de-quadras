function validaUsuario() {
    var acessoConcedido = false; 
    var usuarios = JSON.parse(localStorage.getItem('dbPF') || "[]");
    var login = $('#emailLogin').val();
    var senha = $('#senhaLogin').val();
    // var tipo = $("input:radio[name=tipo]:checked").val()    
    for(let i in usuarios.registro){
        if(usuarios.registro[i].email == login && usuarios.registro[i].password == senha){
            acessoConcedido = true;
        }
    }
    return acessoConcedido;
}


$(document).ready(function () {
    $('#entrar').on('click', function () {

        if(validaUsuario() == true){
            $('#entrar').attr('href', '../../Painel/html/index.html');
        }else{
            $('.labelLogin').html('Usuário e/ou senha incorreto(a)!')
        };
    });
});
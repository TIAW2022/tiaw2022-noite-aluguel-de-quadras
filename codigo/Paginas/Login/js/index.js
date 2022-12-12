function validaUsuario() {
    var acessoConcedido = false;
    clienteMarcado = $('#cliente').prop('checked');
    propMarcado = $('#proprietario').prop('checked');

    console.log(propMarcado);
    console.log(clienteMarcado);
    

    if(clienteMarcado == true){
        var usuarios = JSON.parse(localStorage.getItem('dbPF') || "[]");
        var login = $('#emailLogin').val();
        var senha = $('#senhaLogin').val();
        for(let i in usuarios.registro){
            if(usuarios.registro[i].email == login && usuarios.registro[i].password == senha){
                acessoConcedido = true;
            }
        }
        return acessoConcedido;

    }else if(propMarcado == true){
        var usuarios = JSON.parse(localStorage.getItem('dbPJ') || "[]");
        var login = $('#emailLogin').val();
        var senha = $('#senhaLogin').val();
        for(let i in usuarios.registro){
        if(usuarios.registro[i].email == login && usuarios.registro[i].password == senha){
            acessoConcedido = true;
            }
        }
        return acessoConcedido;
    }
    
}


$(document).ready(function () {
    $('#proprietario').on('click', function(){
        $('#proprietario').prop('checked', true)
    });

    $('#cliente').on('click', function(){
        $('#cliente').prop('checked', true)
    });

    $('#entrar').on('click', function () {
        if(validaUsuario() == true){
            $('#entrar').attr('href', '../../Painel/html/index.html');
        }else{
            $('.labelLogin').html('Usuário e/ou senha incorreto(a)!')
        };
    });
});
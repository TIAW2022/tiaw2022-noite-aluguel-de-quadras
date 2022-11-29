var marcacoes = [];

function listaMarcacoes() {
    var adicionarMarc = JSON.parse(localStorage.getItem('marcacoes') || "[]");
    console.log(adicionarMarc)
    var item = '';

    adicionarMarc.forEach(marcacao => {
        item += `
        <tr>
            <td>${marcacao.id}</td>
            <td>${marcacao.cliente}</td>
            <td>${marcacao.quadra}</td>
            <td>${marcacao.data}</td>
            <td>R$ ${marcacao.valor}</td>
            <td>${marcacao.pago}</td>
            <td>${marcacao.ativo}</td>
            <td class="text-center">
                <div style="font-size: 22px;display: flex;justify-content: space-evenly;align-items: center;">
                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                    <i class="fa fa-trash-o" aria-hidden="true"></i>
                </div>
            </td>
        </tr>`
    });

    $('#corpoLista').html(item)
    
}
function validaAtivo(ativo){
    if(ativo === ''){
        ativo = 'Não'
    }
}
function adicionaMarcacoes() {
    var marcAdd = JSON.parse(localStorage.getItem('marcacoes') || "[]");
    var id = marcAdd.length + 1;
    var cliente = $('#cliente').val();
    var quadra = $('#quadra').val();
    var data = $('#data').val();
    var valor = $('#valor').val();
    var pago = $('#pago').val();
    var ativo = $('#ativo').val();
    
    jQuery.extend(jQuery.validator.messages, {
        required: "Preenchimento obrigatório!",
        minlength: jQuery.validator.format("É necessário inserir no mínimo {0} caracteres."),
    })
    
    $(function(){
        $("#form_marcacao").validate();
    })

    var validacao = $("#form_marcacao").valid();
    console.log(validacao);
    validaAtivo(ativo);
    if(validacao == true){
        marcAdd.push({
            id,
            cliente,
            quadra,
            data,
            valor,
            pago,
            ativo
        });
        console.log(marcAdd);
        localStorage.setItem('marcacoes', JSON.stringify(marcAdd));
        window.location.href = "../html/index.html";
    }
}

$(document).ready(function () {

    $("#salvar").on("click", function (){
        adicionaMarcacoes();
    });
    listaMarcacoes();
})
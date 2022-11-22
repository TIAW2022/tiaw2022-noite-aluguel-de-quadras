var quadras = [];

function listaQuadras() {
    var quadras1 = JSON.parse(localStorage.getItem('quadras') || "[]");
    var item = '';

    quadras1.forEach(quadra => {
        item += `
        <tr>
            <td>${quadra.id}</td>
            <td>${quadra.nome}</td>
            <td>${quadra.tipo}</td>
            <td>${quadra.ativo}</td>
            <td>R$ ${quadra.valor}</td>
            <td class="text-center" style="display: flex; justify-content: center;">
                <div style="font-size: 19px;display: flex;justify-content: center;align-items: center;">
                    <a id="editar" data-target="${quadra.id}" type="button" class="btn btn-outline-dark" href="#"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a>
                    <a id="deletar" data-target="${quadra.id}" type="button" class="btn btn-outline-danger" style="margin-left: 5%" href="#"><i class="fa fa-trash-o" aria-hidden="true"></i></a>
                </div>
            </td>
        </tr>`
    });

    $('#corpoLista').html(item)

}

function validaAtivo(ativo) {
    if (ativo === '') {
        ativo = "-----"
    }
}

function adicionaQuadra() {
    var quadraAdd = JSON.parse(localStorage.getItem('quadras') || "[]");
    var id = quadraAdd.length + 1;
    var nome = $('#nome').val();
    var tipo = $('#tipo').val();
    var ativo = $('#ativo').val();
    validaAtivo(ativo)
    var valor = $('#valor').val();
    quadraAdd.push({
        id,
        nome,
        tipo,
        ativo,
        valor
    });
    console.log(quadraAdd)
    localStorage.setItem('quadras', JSON.stringify(quadraAdd));
}

function editarQuadra(){}

$(document).ready(function () {
    
    $("#salvar").on("click", function () {
        adicionaQuadra();
    });
    $( "body" ).delegate( "#deletar", "click", function() {
        quadras = $.parseJSON(localStorage.getItem('quadras'))
        let idTarget = $(this).attr('data-target')/quadras.length-1;
        if (quadras.length == 1){
            idTarget = 0
        }
        quadras.splice(idTarget, 1)
        localStorage.setItem("quadras", JSON.stringify(quadras))
        location.reload()
    });
    $("#editar").on("click", function () {
        editarQuadra();
    });
    listaQuadras();

})
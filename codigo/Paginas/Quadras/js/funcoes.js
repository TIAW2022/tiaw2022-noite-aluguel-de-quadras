var quadras = [];

function listaQuadras() {
    var quadras1 = JSON.parse(localStorage.getItem('quadras') || "[]");
    console.log(quadras1)
    var item = '';

    quadras1.forEach(quadra => {
        item += `
        <tr>
            <td>${quadra.id}</td>
            <td>${quadra.nome}</td>
            <td>${quadra.tipo}</td>
            <td>${quadra.ativo}</td>
            <td>R$ ${quadra.valor}</td>
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
        ativo = ''
    }
}
function adicionaQuadra() {
    var quadraAdd = JSON.parse(localStorage.getItem('quadras') || "[]");
    let id = quadraAdd.length + 1;
    let nome = $('#nome').val();
    let tipo = $('#tipo').val();
    var ativo = $('#ativo').val();
    validaAtivo(ativo);
    let valor = $('#valor').val();
    quadraAdd.push({
        id,
        nome,
        tipo,
        ativo,
        valor
    });
    localStorage.setItem('quadras', JSON.stringify(quadraAdd));
}

$(document).ready(function () {

    $("#salvar").on("click", function () {
        adicionaQuadra();
    });
    listaQuadras();

})
var quadras = [];

function listaQuadras(){
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
        </tr>`
    });
    
    $('#corpoLista').html(item)

}
function adicionaQuadra(){
    let id = quadras.length+1;
    let nome = $('#nome').val();
    let tipo = $('#tipo').val();
    var ativo = $('#ativo').val();
    let valor = $('#valor').val();
    quadras.push({id, nome, tipo, ativo, valor});
    localStorage.setItem('quadras', JSON.stringify(quadras));
}

$(document).ready( function () {
    
      $("#salvar").on( "click", function() {
        adicionaQuadra();
    });
    listaQuadras();
    
})


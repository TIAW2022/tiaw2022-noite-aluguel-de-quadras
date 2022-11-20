function listaQuadras(){
    var item = '';
    let quadras = [];
    let quadra = 
    {
        'id': 1,
        'nome':'Quadra 1',
        'tipo':'Society',
        'ativa':'Sim',
        'valor':'R$ 100,00',
    }
    quadras.push(quadra);
    quadras.forEach(quadra => {
        item += `
        <tr>
            <td>${quadra.id}</td>
            <td>${quadra.nome}</td>
            <td>${quadra.tipo}</td>
            <td>${quadra.ativa}</td>
            <td>${quadra.valor}</td>
        </tr>`
    });
    
    $('#corpoLista').html(item)
    // $(".loader-wrapper").fadeOut("slow" | 4000)
    console.log(quadras)
}

$(document).ready(function () {
    
    listaQuadras();
    
})


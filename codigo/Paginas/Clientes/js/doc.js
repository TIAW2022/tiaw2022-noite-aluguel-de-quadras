
var clientes = [];

function listaCliente() {
  var Lcliente = JSON.parse(localStorage.getItem('clientes') || "[]");
  console.log(Lcliente)
  var item = '';

  Lcliente.forEach(cliente => {
      item += `
            <tr>  
              <td>${cliente.id}</td>
              <td>${cliente.nome}</td>
              <td>${cliente.email}</td>
              <td>${cliente.telefone}</td>
              <td>${cliente.ativo}</td>
           </tr>`
  });

  $('#Lista').html(item)

}

function adClientes() {
  var Addcliente = JSON.parse(localStorage.getItem('clientes') || "[]");
  let id = Addcliente.length + 1;
  let nome = $('#nome').val();
  let sobrenome = $('#sobrenome').val();
  let email = $('#email').val();
  let telefone = $('#telefone').val();
  let whatsapp = $('#whats').val();
  var ativo = $('#ativo').val();
  validaAtivo(ativo);
  Addcliente.push({
      id,
      nome,
      sobrenome,
      email,
      telefone,
      whatsapp,
      ativo
  });
  localStorage.setItem('clientes', JSON.stringify(Addcliente));
}
function validaAtivo(ativo){
  if(ativo === ''){
      ativo = ''
  }
}

$(document).ready(function () {

  $("#salvar").on("click", function () {
      adClientes();
  });
  listaCliente();

})


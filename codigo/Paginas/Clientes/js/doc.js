var inputNome = document.querySelector("#nome");
var inputsobrenome = document.querySelector("#sobrenome");

sobrenome.addEventListener("keypress", function(e) {
    var keyCode2 = (e.keyCode2 ? e.keyCode2 : e.which);

    if(keyCode2 > 47 && keyCode2 <58){
        e.preventDefault();
    }
})




nome.addEventListener("keypress", function(e) {
    var keyCode = (e.keyCode ? e.keyCode : e.which);
  
  if (keyCode > 47 && keyCode < 58) {
    e.preventDefault();
  }
});

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
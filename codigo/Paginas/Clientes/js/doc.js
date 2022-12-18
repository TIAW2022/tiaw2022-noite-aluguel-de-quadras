var Cliente

function listaCliente() {
  var addcliente = JSON.parse(localStorage.getItem('Cliente') || "[]");
  console.log(addcliente)
  var item = '';

  addcliente.forEach(cliente => {
      item += `
      <tr>
          <td>${cliente.id}</td>
          <td>${cliente.nome}</td>
          <td>${cliente.email}</td>
          <td>${cliente.telefone}</td>
          <td>${cliente.ativo}</td>
          <td class="text-center" style="display: flex; justify-content: center;">
              <div style="font-size: 19px;display: flex;justify-content: center;align-items: center;">
                  <button id="editar" data-target="${cliente.id}" type="button" class="btn btn-outline-dark" href="#" disabled><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a>
                  <button id="deletar" data-target="${cliente.id}" type="button" class="btn btn-outline-danger deletar" style="margin-left: 5%" href="#"><i class="fa fa-trash-o" aria-hidden="true"></i></a>
              </div>
          </td>
      </tr>`
  });

  $('#Lista').html(item)
  
}
function validaAtivo(ativo){
  if(ativo === ''){
      ativo = 'Não'
  }
}
function adicionaClientes() {
  var clientAdd = JSON.parse(localStorage.getItem('Cliente') || "[]");
  var id = clientAdd.length + 1;
  var nome = $('#nome').val();
  var sobrenome = $('#sobrenome').val();
  var email = $('#email').val();
  var telefone = $('#telefone').val();
  var whatsapp = $('#whats').val();
  var ativo = $('#ativo').val();
  
  jQuery.extend(jQuery.validator.messages, {
      required: "Preenchimento obrigatório!",
      minlength: jQuery.validator.format("É necessário inserir no mínimo {0} caracteres."),
  })
  
  $(function(){
      $("#form_client").validate();
  })

  var validacao = $("#form_client").valid();
  console.log(validacao);
  validaAtivo(ativo);
  if(validacao == true){
      clientAdd.push({
          id,
          nome,
          sobrenome,
          email,
          telefone,
          whatsapp,
          ativo
      });
      console.log(marcAdd);
      localStorage.setItem('Cliente', JSON.stringify(clientAdd));
      window.location.href = "../html/index.html";
  }
}

$(document).ready(function () {

  $("#salvar").on("click", function (){
      adicionaClientes();
  });
  listaCliente();
})

function deletarMarcacoes() {
  $(document).ready(function () {

      $('body').delegate('.deletar', 'click', function () {
          Cliente = $.parseJSON(localStorage.getItem('Cliente'));
          let idTarget = $(this).attr('data-target') / Cliente.length - 1;
          if(Cliente.length == 1) {
              idTarget = 0;
          };
          Cliente.splice(idTarget, 1);
          localStorage.setItem('Cliente', JSON.stringify(Cliente));
          location.reload();
      });
      listaCliente();
  })
}
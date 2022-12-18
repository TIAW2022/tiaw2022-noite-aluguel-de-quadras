var inputNome = document.querySelector("#nome");
var inputsobrenome = document.querySelector("#sobrenome");

inputsobrenome.addEventListener("keypress", function(e) {
    var keyCode2 = (e.keyCode2 ? e.keyCode2 : e.which);

    if(keyCode2 > 47 && keyCode2 <58){
        e.preventDefault();
    }
})


inputNome.addEventListener("keypress", function(e) {
    var keyCode = (e.keyCode ? e.keyCode : e.which);

  if (keyCode > 47 && keyCode < 58) {
    e.preventDefault();
  }
});

function validacaoEmail(field) {
  usuario = field.value.substring(0, field.value.indexOf("@"));
  dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
  
  if ((usuario.length >=1) &&
      (dominio.length >=3) &&
      (usuario.search("@")==-1) &&
      (dominio.search("@")==-1) &&
      (usuario.search(" ")==-1) &&
      (dominio.search(" ")==-1) &&
      (dominio.search(".")!=-1) &&
      (dominio.indexOf(".") >=1)&&
      (dominio.lastIndexOf(".") < dominio.length - 1)) {
  document.getElementById("#email").innerHTML="E-mail válido";
  alert("E-mail valido");
  }
  else{
  document.getElementById("#email").innerHTML="<font color='red'>E-mail inválido </font>";
  alert("E-mail invalido");
  }
  }
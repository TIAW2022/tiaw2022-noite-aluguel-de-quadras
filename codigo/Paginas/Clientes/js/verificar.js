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
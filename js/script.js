document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario(){
  //Código do formulário de nome e email
    if (document.getElementById("nome").value != "" && document.getElementById("email").value != "" && document.getElementById("telefone").value != ""){
    alert("Prontinho! Você receberá as novidades por email.")
  }else{
    alert("Por favor, preencha os campos nome e email!")
  }
}



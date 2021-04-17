let tentativas=0;
function t1(){
  tentativas++;
  var usuario=document.getElementById("validar").value;
  var senha=document.getElementById("validara").value;
  if(usuario!="admin" || senha!="admin"){
    alert("Usuário ou senha inválidos! tente novamente");
    if(tentativas==5){
      window.location.replace("/bloqueado");
     }
  } else if(usuario=="admin" && senha=="admin"){
   window.location.replace("/logado");
  } 

}
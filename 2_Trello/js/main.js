//Variables
var elTablero = document.getElementById("tablero");
var elLista = document.getElementById("lista");
var elAnadirLista = document.getElementById("anadirLista");
var elTarjeta = document.getElementById("tarjeta");
var inputLista = document.getElementById("inputLista");
var guardar = document.getElementById("guardar");
var contador =1;

elAnadirLista.addEventListener("click", function(e){
    e.preventDefault();
      elAnadirLista.style.display = "none";
        activarCampo();
      inputLista.focus();
      elLista.classList.add("lista");
  });

guardar.addEventListener("click", function(){
    elLista.style.display = "none";
    agregarMensaje(inputLista, this);
    insertarContenedor();
    inputLista.value = "";

    elLista.addEventListener("drop", soltar);
    elLista.addEventListener("dragover", arrastrarSobre);
    elLista.addEventListener("dragleave", dejaArrastrar);
  });


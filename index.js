
/*
function cambiarModo() { 
  alert("cambio");
    var cuerpoweb = document.body; 
    cuerpoweb.classList.toggle ("oscuro"); 
  }
  */

  function cambiarModo() { 
    alert("Remove");
    var cuerpoweb = document.body;
    var oscuro = cuerpoweb.classList.toggle("oscuro");
    storage.removeItem("oscuro");
    
    // localStorage.setItem("oscuro", oscuro);
  }
  /*
  document.addEventListener("DOMContentLoaded", function() {
    alert("Remove 2");
    if (localStorage.getItem("oscuro")) {
      // cambiarModo();
    }
  });
  */

  function toastFunction() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");  
    // Add the "show" class to DIV
    x.className = "show";  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

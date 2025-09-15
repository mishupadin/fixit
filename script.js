// Formulario de contacto simple
const form = document.querySelector('form');
form.addEventListener('submit', function(e){
  e.preventDefault();
  alert("✅ Gracias por tu mensaje. Te responderemos pronto.");
  form.reset();
});
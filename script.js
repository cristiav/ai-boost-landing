// Inicializar EmailJS
emailjs.init("K2pa3BHW30Mc7Sx9L");

const form = document.getElementById("subscribe-form");
const messageEl = document.getElementById("message");

form.addEventListener("submit", function(e){
  e.preventDefault();

  const email = document.getElementById("email").value.trim();

  if(!email){
    messageEl.textContent = "❌ Por favor ingresa un correo válido.";
    return;
  }

  const params = { user_email: email };

  // Enviar correo al usuario
  emailjs.send("service_zsayibw", "template_fztjbj4", params)
    .then(function(){
      console.log("Correo de bienvenida enviado al usuario ✅");

      // Mensaje de confirmación al usuario
      messageEl.textContent = "✅ Suscripción exitosa. Revisa tu correo.";

    })
    .catch(function(error){
      console.error("Error al enviar correo al usuario:", error);
      messageEl.textContent = "❌ Error al enviar correo al usuario.";
    });

  // Enviar correo al admin (independiente)
  emailjs.send("service_zsayibw", "template_p4f3ufg", params)
    .then(function(){
      console.log("Notificación enviada al admin ✅");
    })
    .catch(function(error){
      console.error("Error al enviar correo al admin:", error);
    });

  form.reset();
});
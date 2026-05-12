emailjs.init("K2pa3BHW30Mc7Sx9L");

const form = document.getElementById("subscribe-form");
const messageEl = document.getElementById("message");

form.addEventListener("submit", function(e){
  e.preventDefault();

  const email = document.getElementById("email").value.trim();

  if(!email){
    messageEl.textContent = "❌ Por favor ingresa un correo válido.";
    messageEl.style.color = "#f87171"; // rojo
    return;
  }

  const params = { user_email: email };

  emailjs.send("service_zsayibw", "template_fztjbj4", params)
    .then(function(){
      messageEl.textContent = "✅ Suscripción exitosa. Revisa tu correo.";
      messageEl.style.color = "#22c55e"; // verde
    })
    .catch(function(error){
      messageEl.textContent = "❌ Error al enviar correo al usuario.";
      messageEl.style.color = "#f87171";
      console.error(error);
    });

  emailjs.send("service_zsayibw", "template_p4f3ufg", params)
    .then(()=> console.log("Notificación enviada al admin ✅"))
    .catch(error => console.error(error));

  form.reset();
});
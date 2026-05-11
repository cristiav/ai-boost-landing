emailjs.init("K2pa3BHW30Mc7Sx9L");

const form = document.getElementById("subscribe-form");

form.addEventListener("submit", function(e){

e.preventDefault();

const email = document.getElementById("email").value;

emailjs.send(
"service_zsayibw",
"template_p4f3ufg",
{
user_email: email
}
)
.then(function(){

document.getElementById("message").innerHTML =
"✅ Suscripción exitosa. Revisa tu correo.";

form.reset();

})
.catch(function(error){

document.getElementById("message").innerHTML =
"❌ Error al enviar.";

console.log(error);

});

});
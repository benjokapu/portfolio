// Efecto de aparición progresiva al hacer scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

document.querySelectorAll('.project-card, footer').forEach(el => observer.observe(el));


// Abre Gmail con un mensaje nuevo y los datos del usuario ya completados
function sendEmail(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Datos del correo
  const subject = encodeURIComponent(`Contacto Benjamin - Get In Touch`);
  const body = encodeURIComponent(
    `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`
  );

  // Tu dirección de destino
  const recipient = "benjokapu@gmail.com";

  // URL para abrir Gmail en modo redacción
  const gmailURL = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;

  // Abre Gmail en una nueva pestaña con los datos cargados
  window.open(gmailURL, "_blank");
  event.target.reset();
}





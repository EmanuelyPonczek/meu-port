'use strict';



/**
 * Add eventListener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * PRELOADER
 */

const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});



/**
 * MOBILE NAV TOGGLE
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () { navbar.classList.toggle("active"); }

navToggler.addEventListener("click", toggleNavbar);



/**
 * HEADER
 * 
 * active header when window scrolled to 50px
 */

const header = document.querySelector("[data-header]");

const activeHeader = function () {
  window.scrollY > 50 ? header.classList.add("active")
    : header.classList.remove("active");
}

window.addEventListener("scroll", activeHeader);



// formulário de contato JS 

document.getElementById("send-whatsapp").addEventListener("click", function(event) {
  event.preventDefault();

  // Captura os valores dos campos do formulário
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let subject = document.getElementById("subject").value.trim();
  let message = document.getElementById("message").value.trim();

  // Verifica se os campos estão preenchidos e exibe alertas personalizados
  if (name === "") {
      Swal.fire({
          icon: 'warning',
          title: 'Campo Obrigatório',
          text: 'Por favor, preencha o seu nome.',
          showConfirmButton: false,
          timer: 2000
      });
      return;
  }

  if (email === "") {
      Swal.fire({
          icon: 'warning',
          title: 'Campo Obrigatório',
          text: 'Por favor, preencha o seu email.',
          showConfirmButton: false,
          timer: 2000
      });
      return;
  }

  if (subject === "") {
      Swal.fire({
          icon: 'warning',
          title: 'Campo Obrigatório',
          text: 'Por favor, preencha o assunto.',
          showConfirmButton: false,
          timer: 2000
      });
      return;
  }

  if (message === "") {
      Swal.fire({
          icon: 'warning',
          title: 'Campo Obrigatório',
          text: 'Por favor, escreva uma mensagem.',
          showConfirmButton: false,
          timer: 2000
      });
      return;
  }

  // Número de telefone (inclua o código do país, por exemplo, 55 para Brasil)
  let phoneNumber = "5541997519360"; // Coloque o número do seu WhatsApp aqui

  // Monta a URL para o WhatsApp
  let whatsappURL = `https://wa.me/${phoneNumber}?text=Olá, meu nome é ${encodeURIComponent(name)}. 
  Assunto: ${encodeURIComponent(subject)}. 
  Email: ${encodeURIComponent(email)}. 
  Mensagem: ${encodeURIComponent(message)}`;

  // Redireciona para o WhatsApp
  window.open(whatsappURL, "_blank");
});


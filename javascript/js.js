const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


/* Fermeture du menu si lien vers page a été cliqué  */
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

/* VALIDATION FORMULAIRE*/

addEventListener
function ValidationForm() {
    let username = document.forms["RegForm"]["Nom"];
    let email = document.forms["RegForm"]["email"];
    let message = document.forms["RegForm"]["message"];

    if(username.value == "") {
      alert("Entrez votre Nom et Prenom");
      username.focus();
      return false;
    }
    if(email.value == "") {
      alert("Entrez une adresse e-mail valide");
      email.focus();
      return false;
    }
    if(email.value.indexOf("@", 0) < 0) {
      alert("Entrez une adresse e-mail valide");
      email.focus();
      return false;
    }
    if(email.value.indexOf(".", 0) < 0) {
      alert("Entrez une adresse e-mail valide");
      email.focus();
      return false;
    }
    }
    if(message.value == "") {
      alert("Entrez un message");
      message.focus();
      return false;
    }
    return true;

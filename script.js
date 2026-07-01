// Replace the entire script.js

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Thank you! Your message has been sent successfully.");

    form.reset();

});
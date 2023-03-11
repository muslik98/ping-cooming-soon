let emailInput = document.querySelector('input[name="email"]');
let notifyButton = document.querySelector('#notify');
let emailCheck = document.querySelector('.emailCheck');
let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

notifyButton.addEventListener('click', (e) => {
    e.preventDefault();

    let emailValue = emailInput.value;

    if(regex.test(emailValue)) {
        emailCheck.style.display = "none";
    } else { 
        emailCheck.style.display = "block";
    } 
});

// let sosmed = document.querySelectorAll('.social-media img');

// bug hover sosmed
// Array.from(sosmed).map(function(element) {
//     element.addEventListener("mouseover", function() {
//       element.setAttribute("fill", "white");
//     });
//   });
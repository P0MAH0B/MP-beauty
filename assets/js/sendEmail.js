
function sendMail(contactForm) {
    emailjs.send("beauty","template_beauty", {
        "from_name": contactForm.inputName.value,
        "last_name": contactForm.inputLastName.value,
        "phone_number": contactForm.inputPhone.value,
        "from_email": contactForm.inputEmail.value,
        "procedure": contactForm.inputProcedure.value
    })
    .then(
        function(response) {
            console.log("SUCCES", response);
        },
      function(error) {
        console.log("FAILED", error);
      });
}

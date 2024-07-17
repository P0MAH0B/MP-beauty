
/* $(document).ready(function(){
  $("#booking_btn").on("click", function(){
    $("#form_bg").removeClass('hidden');
  });
}); */

/** Animation  */
function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      } 
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  
  for (let elm of elements) {
    observer.observe(elm);
  }

  /** EmailJS  */
  
  function sendMail(contactForm) {
    emailjs.send("beauty","template_beauty", {
        from_name: contactForm.inputName.value,
        last_name: contactForm.inputLastName.value,
        phone_number: contactForm.inputPhone.value,
        from_email: contactForm.inputEmail.value,
        procedure: contactForm.inputProcedure.value,
        
    })
    .then(
        function(response) {
            console.log("SUCCES", response);
            document.getElementById("booking_form").innerHTML="<h2>Your Booking details were successfully sent, we will get back to you ASAP.</h2>"
        },
        function(error) {
        console.log("FAILED", error);
        }
    );
        return false;
}



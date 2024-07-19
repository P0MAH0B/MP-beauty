


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

/*      Map     */


        function initMap(){
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 10,
                center: {
                  lat: 54.96066231417327, 
                  lng: -1.5995372727870325 
                }
            });
            var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            var locations = [
                {lat: 54.98141245680022, lng: -1.4882379132222212},
                {lat: 54.99133601911203, lng: -1.5350220681579623}, 
                {lat: 54.97396288580899, lng: -1.6106936186915504},
                {lat: 54.97504681953739, lng: -1.6905606355116636}
            ];
            var marker = locations.map(function(location, i){
                return new google.maps.Marker({
                    position: location,
                    label: labels[i % labels.length],
                    
                });
               
            });
            var markerClusterer = new MarkerClusterer(map, marker,
              {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
        }
  
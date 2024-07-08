
$(document).ready(function(){
  $("#booking_btn").on("click", function(){
    $("#form_bg").removeClass('hidden');
  });
});

/** Animation  */
function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      } /*else {
        change.target.classList.remove('element-show');
      }*/
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  
  for (let elm of elements) {
    observer.observe(elm);
  }



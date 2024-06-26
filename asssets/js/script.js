
/** Animation  */
function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      } else {
        change.target.classList.remove('element-show');
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


  /** Map Function 
  function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 3,
      center: {
        lat: 54.980087,
        lng: -1.491798
      }
    });
  }
*/
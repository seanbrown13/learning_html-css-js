console.log("Hello World!")

/*Expand Text*/
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
} 

/*Google Maps API functionality - To be integrated*/
function myMap() {
  var mapCanvas = document.getElementById("map");
  var myCenter = new google.maps.LatLng(51.3744999,-0.1134661)
  var mapOptions = {
    center: myCenter, zoom: 16.79};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({position: myCenter});
  marker.setMap(map);
  var infowindow = new google.maps.InfoWindow({
  content:"Park"
  });
  infowindow.open(map,marker); 
}
 
  let quoteArray = ["When the soul of a man is born in this country there are nets flung at it to hold it back from flight. I shall try to fly by those nets.", "Linux is a cancer that attaches itself in an intellectual property sense to everything it touches", "There’s daggers in men’s smiles", "Is there a man among you, who by worrying can add one minute to his span of life?", "Education is the kindling of a flame, not the filling of a vessel", "Good looks are the best recommendation letter" 
]
  let authorArray = ["James Joyce", "Steve Ballmer", "Donalbain", "Jesus", "Socrates", "Aristotle"]
  let colors = ["Blue", "Purple", "Pink", "Grey", "Yellow", "Red"]
  
function textColor() { 
    var seed =  Math.floor(Math.random()*6)
    return colors[seed] 
}

function QuotePlusAuthor() {
    var seed = Math.floor(Math.random()*6)
    
    function getQuote() {
        var Quote = quoteArray[seed]
        return Quote 
    }
    function getAuthor() {
        var Author = authorArray[seed] 
        return Author
    }
    return getQuote() + " - " + getAuthor()
} 

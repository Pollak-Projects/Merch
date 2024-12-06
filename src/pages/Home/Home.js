/* Slideshow controll */ 

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
}

/* Polo Data Handeling */

//These will go to Kosár
let poloAmount = 1;
let poloSize = 0;
let poloColor = 0;

//Amount Of Polo Controller

let PoloPrice = 3000;

function AmountOfPoloController(a) {

  let dispalyAmount = document.getElementById("AmountOfPolo");
  let displayPrice = document.getElementById("PoloPrice");

  if(a == 1 && poloAmount < 10){
    poloAmount++;
    PoloPrice += 3000;
  }

  if(a == -1 && poloAmount > 1){
    poloAmount--;
    PoloPrice -= 3000;
  }

  dispalyAmount.innerHTML = poloAmount;
  displayPrice.innerHTML= PoloPrice + " Ft";
}

// Polo Size Changling

function SizeChagning(s){
  if(s == 1){
    poloSize = "S";
  }
  else if(s == 2){
    poloSize = "M";
  }
  else if(s == 3){
    poloSize = "L";
  }
  else if(s == 4){
    poloSize = "XL";
  }
  else if(s == 5){
    poloSize = "XXL";
  }
}

// Polo Color Changing

function ColorChanging(c){
  if(c == 1){
    poloColor = "Yellow";
  }
  else if(c == 2){
    poloColor = "Red";
  }
  else if(c == 3){
    poloColor = "Blue";
  }
  else if(c == 4){
    poloColor = "Black";
  }
}

// These will Check for empty Data and send everything to "Kosár"

function SendDataToKosar(){
  if(poloColor == 0){
    alert("Válasz még egy Színt is")
  }
  else if(poloSize == 0){
    alert("Válasz még egy Méretet is")
  }
  else{
    console.log(poloAmount);
    console.log(poloSize);
    console.log(poloColor);
  }
  
}
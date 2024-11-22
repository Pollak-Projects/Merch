 
  function openSidebar() {
    document.querySelector(".sidebar").classList.toggle("translate-x-[-192px]");
    document.querySelector(".sidebar").classList.toggle("max-[800px]:translate-x-[0px]");
    document.querySelector(".sidebar").classList.toggle("max-[800px]:translate-y-[-300px]");
    document.querySelector("#sidebar2").classList.toggle("translate-x-[-192px]");
    document.querySelector("#sidebar2").classList.toggle("max-[800px]:translate-x-[0px]");
    document.querySelector("#sidebar2").classList.toggle("max-[800px]:translate-y-[-300px]");
  }
  function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    

  }
  
  function closeNav() {
    document.getElementById("closenav").style.width = "0";
  }

  let adatok = ["Ferenc", "ferenc@pollak.hu (kene az email arpi)", "+36301363356"]

let nev = adatok[0]
let email = adatok[1]
let tel = adatok[2]

document.getElementById("nev").innerHTML = nev;

document.getElementById("email").innerHTML = email;

document.getElementById("tel").innerHTML = tel;
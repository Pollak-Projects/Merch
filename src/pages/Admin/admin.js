 
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
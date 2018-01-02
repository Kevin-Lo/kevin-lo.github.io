function openNav() {
    document.getElementById("sidebar").style.transition = ".2s";
   	document.getElementById("mySidenav").style.transition = "1.5s";
	document.getElementById("sidebar").style.width = "0px";
    document.getElementById("mySidenav").style.width = "150px";
}

function closeNav() {
    document.getElementById("mySidenav").style.transition = ".2s";
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("sidebar").style.transition = "1.5s";
    document.getElementById("sidebar").style.width = "50px";
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
  }
}

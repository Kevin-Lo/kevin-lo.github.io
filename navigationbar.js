function openNav() {
    document.getElementById("sidebar").style.transition = ".5s";
   	document.getElementById("navbar").style.transition = "1.5s";
	document.getElementById("sidebar").style.width = "0px";
    document.getElementById("mySidenav").style.width = "150px";
}

function closeNav() {
    document.getElementById("navbar").style.transition = ".3s";
    document.getElementById("navbar").style.width = "0";
    document.getElementById("sidebar").style.transition = "1.5s";
    document.getElementById("sidebar").style.width = "45px";
}

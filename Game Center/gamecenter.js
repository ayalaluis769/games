// Nav Bar Function

function dropdownMenu() {
    var x = document.getElementById("dropdownClick");
    if (x.className === "mainnav") {
        x.className += " responsive";
    }
    else {
        x.className = "mainnav";
    }
}
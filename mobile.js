
/**
 * @function mobileNavigation
 * Precondition: Assumes a list of navigation buttons with the class name "mobileLinks"
 * PostCondition: Displays or Hides the navigation buttons (while in mobile mode)
 */
function mobileNavigation() {
    var links = document.getElementsByClassName("mobileLinks")[0];
    setTimeout(function() {
        if (links.classList.contains("addMobile")) {
            links.classList.add("removeMobile");
            links.classList.remove("addMobile");
          } else {
            links.classList.remove("removeMobile");
            links.classList.add("addMobile");
          }
    }, 25);
  }

  function closeNavigation() {
    var links = document.getElementsByClassName("mobileLinks")[0];
    links.classList.add("removeMobile");
    links.classList.remove("addMobile");
  }
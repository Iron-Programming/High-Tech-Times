
/**
 * @function mobileNavigation
 * Precondition: Assumes a list of navigation buttons with the class name "mobileLinks"
 * PostCondition: Displays or Hides the navigation buttons (while in mobile mode)
 */
function mobileNavigation() {
    var links = document.getElementsByClassName("mobileLinks")[0];
    if (links.style.display === "block") {
      links.style.display = "none";
    } else {
      links.style.display = "block";
    }
  }
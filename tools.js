
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
  /**
 * @function closeNavigation
 * Closes Navigation (used on body tag)
 */
  function closeNavigation() {
    var links = document.getElementsByClassName("mobileLinks")[0];
    links.classList.add("removeMobile");
    links.classList.remove("addMobile");
  }


/**
 * @function enlargeImage
 * Enlarges / minimizes an image
 */
 function enlargeImage(image) {
  if (image.classList.contains("defaultImage")) {
       image.classList.add('enlargedImage');
       image.classList.remove('defaultImage');
  } else {
      image.classList.remove('enlargedImage');
       image.classList.add('defaultImage');
  }
}

var code = document.getElementsByClassName('code');
var HL = {
  highlight: function(code) {
    // this is a work in progress
    code = code.replace(/(&lt;[\s\S]*?&gt;)/g, '<span class="blue">$1</span>');
    
    return code;
  },
  all:function(list) {
    for (var i = 0; i < list.length; i++) {
      list[i].innerHTML = this.highlight(list[i].innerHTML);
    }
  }
};
HL.all(code);
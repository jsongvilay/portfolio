var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

var acc = document.getElementsByClassName("sub-accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var subpanel = this.nextElementSibling;
    if (subpanel.style.maxHeight) {
      subpanel.style.maxHeight = null;
    } else {
      subpanel.style.maxHeight = subpanel.scrollHeight + "px";
    }
  });
}

AOS.init({
  easing: linear,
  delay: 300,
  duration: 1200,
  disable: "mobile",
  disable: "phone",
});


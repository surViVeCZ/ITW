function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

  //visible navbar
  window.addEventListener("scroll", function(){
      var header = document.querySelector("#header-menu");
      header.classList.toggle("sticky", window.scrollY > 600);

  })
    //active section
    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll("#navs li");
    window.addEventListener("scroll", () => {
    let current = "";


    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
        }
        console.log(current)
    });

    navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
        li.classList.add("active");
        }
    });
    });

var slideIndex = 1;
showDivs(slideIndex);

function next_prev(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}


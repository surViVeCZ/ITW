function reveal() {
    const reveal_item = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveal_item.length; i++) {
      var height = window.innerHeight;
      var elementTop = reveal_item[i].getBoundingClientRect().top;
    
      //with less value than 100, you can reveal objects faster
      if (elementTop < height - 100) {
        reveal_item[i].classList.add("active");
      } else {
        reveal_item[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

//always visible navbar
window.addEventListener("scroll", function(){
    var header = document.querySelector("#header-menu");
    header.classList.toggle("sticky", window.scrollY > 600);

})
  //active section in navbar
  const sections = document.querySelectorAll("section");
  const navLi = document.querySelectorAll("#navs li");
  window.addEventListener("scroll", () => {
  let current = "";


  sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.clientHeight;
      if (pageYOffset >= top - height / 3) {
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


function next_prev(n) {
  picture_show(index += n);
}
var index = 1;
picture_show(index);
    
//img carousel in achievements section
function picture_show(n) {
  const x = document.getElementsByClassName("show");
  var l;
  if (n > x.length) {index = 1}
  if (n < 1) {
    index = x.length
  }
  for (l = 0; l < x.length; l++) {
    x[l].style.display = "none";  
  }
  x[index-1].style.display = "block";  
}


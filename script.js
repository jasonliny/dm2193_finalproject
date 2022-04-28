document.addEventListener('aos:in', ( {detail} ) => {
  console.log('animated in');//, detail);
  detail.style.animation="";
  // console.log(detail.querySelectorAll(".boxes div"));
  for (ele of detail.querySelectorAll(".boxes div")) {
    ele.classList.toggle("animate");
    ele.style.animation="";
    console.log(ele);
  }
});
document.addEventListener('aos:out', ( {detail} ) => {
  console.log('animated out');//, detail);
  // detail.style.animation="none";
  for (ele of detail.querySelectorAll(".boxes div")) {
    console.log(ele);
    // ele.style.fillMode="none";
    // console.log(ele.style.fillMode);
    ele.classList.toggle("animate");
  }
});

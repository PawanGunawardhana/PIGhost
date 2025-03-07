const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
   
  })
);

// function playSound(){
//   let audio = new Audio("https://www.myinstants.com/media/sounds/vine-boom.mp3");
//   setInterval(()=>{
//     audio.play();

//   }, Math.random()*10000+5000);
// }
// playSound();
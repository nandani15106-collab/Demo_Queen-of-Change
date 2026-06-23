const darkBtn = document.getElementById("darkBtn");

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

const slider = document.getElementById("slider");

setInterval(() => {

    slider.scrollLeft += 300;

    if(
      slider.scrollLeft + slider.clientWidth >=
      slider.scrollWidth
    ){
        slider.scrollLeft = 0;
    }

},3000);
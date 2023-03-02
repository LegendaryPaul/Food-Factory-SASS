const btnShow = document.querySelector(".btn__show");
const body = document.querySelector("body");
const back = document.querySelector(".btn__back");

if(btnShow){
    btnShow.addEventListener("click", () => {
        body.classList.add("show");
    });
};
if(back){
    back.addEventListener("click", () => {
        body.classList.remove("show");
    });
};
let acc = document.querySelectorAll(".modAccordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
let openModalTermofUse = document.querySelectorAll(".openTermsofuse");
let modalWindow = document.querySelector("#modal_termsofuse");
let closeModalWindow = document.querySelector(".close_modal");
let closeModalWindowX = document.querySelector(".closeModal");
for (i = 0; i < openModalTermofUse.length; i++) {
openModalTermofUse[i].addEventListener('click',function(){
  modalWindow.style.display="block";
});
closeModalWindow.addEventListener('click', function(){
  modalWindow.style.display="none";
});
closeModalWindowX.addEventListener('click', function(){
modalWindow.style.display="none";
});
}

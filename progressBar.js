//       Set Variable
const body = document.body;
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress-bar");


//   Methode 1 if click progress
// progress.addEventListener('click',getWidth);

// //  Set Function
// function getWidth(){
//   const valueWidth = progressBar.getAttribute('data-width');
//   progressBar.style.width = ` ${valueWidth}%`
// }

//   Methode 2 if reload page

setTimeout(() => {
  progressBar.style.width = progressBar.getAttribute('data-width')+"%"
}, 1000);












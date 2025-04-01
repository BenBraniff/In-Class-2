
// bring elements from html to js
const cat = document.querySelector(".cat");
const dog = document.querySelector(".dog");
const cow = document.querySelector(".cow");

const catHideBtn = document.getElementById("catHide");
const dogHideBtn = document.getElementById("dogHide");
const cowHideBtn = document.getElementById("cowHide");

const catRevealBtn = document.getElementById("catReveal");
const dogRevealBtn = document.getElementById("dogReveal");
const cowRevealBtn = document.getElementById("cowReveal");

// hide functions
function handleCatHide() {
  cat.style.visibility = "hidden";
}

function handleDogHide() {
  dog.style.visibility = "hidden";
}

function handleCowHide() {
  cow.style.visibility = "hidden";
}

// reveal functions
function handleCatReveal() {
  cat.style.visibility = "visible";
}

function handleDogReveal() {
  dog.style.visibility = "visible";
}

function handleCowReveal() {
  cow.style.visibility = "visible";
}

// event listeners
catHideBtn.addEventListener("click", handleCatHide);
dogHideBtn.addEventListener("click", handleDogHide);
cowHideBtn.addEventListener("click", handleCowHide);

catRevealBtn.addEventListener("click", handleCatReveal);
dogRevealBtn.addEventListener("click", handleDogReveal);
cowRevealBtn.addEventListener("click", handleCowReveal);



// async function init() {}

// init();

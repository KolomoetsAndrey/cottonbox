// buy_it Modal
var buyModal = document.querySelector(".buy-modal");
var buyTrigger = document.querySelector(".buy-trigger");
var buyCloseButton = document.querySelector(".buy-close-button");

function buyToggleModal() {
    buyModal.classList.toggle("buy-show-modal");
}

function windowOnClick(event) {
    if (event.target === buyModal) {
        buyToggleModal();
    }
}

buyTrigger.addEventListener("click", buyToggleModal);
buyCloseButton.addEventListener("click", buyToggleModal);
// window.addEventListener("click", windowOnClick);
//End buy_it Modal

// oneclick Modal
var oneclickModal = document.querySelector(".oneclick-modal");
var oneclickTrigger = document.querySelector(".oneclick-trigger");
var oneclickCloseButton = document.querySelector(".oneclick-close-button");

function oneclickToggleModal() {
    oneclickModal.classList.toggle("oneclick-show-modal");
}

function windowOnClick(event) {
    if (event.target === oneclickModal) {
        oneclickToggleModal();
    }
}

oneclickTrigger.addEventListener("click", oneclickToggleModal);
oneclickCloseButton.addEventListener("click", oneclickToggleModal);
// window.addEventListener("click", windowOnClick);
//End oneclick Modal

// ask Modal
var askModal = document.querySelector(".ask-modal");
var askTrigger = document.querySelector(".ask-trigger");
var askCloseButton = document.querySelector(".ask-close-button");

function askToggleModal() {
    askModal.classList.toggle("ask-show-modal");
}

function windowOnClick(event) {
    if (event.target === askModal) {
        askToggleModal();
    }
}
askTrigger.addEventListener("click", askToggleModal);
askCloseButton.addEventListener("click", askToggleModal);
// window.addEventListener("click", windowOnClick);
//End ask Modal
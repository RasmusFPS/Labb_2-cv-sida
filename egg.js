const easterTrigger = document.getElementById("easter-trigger");

if(easterTrigger) {
    easterTrigger.addEventListener("click", () => {

    document.body.classList.toggle('LightMode');
    console.log("background toggled");
});
}

let keys = "";

window.addEventListener("keydown", (event) => {
    keys += event.key;

    if(keys == "1337"){
        showModala();
        keys = "";
    }
    else if(keys.length > 4) {
        keys = "";
    }
});

function showModala() {
    const modal = document.getElementById("easter-modal");
    modal.classList.remove("modal-hidden");
}

document.getElementById("close-modal").addEventListener("click", () => {
    document.getElementById("easter-modal").classList.add("modal-hidden");
});
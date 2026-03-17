const easterTrigger = document.getElementById("trigger");

if(easterTrigger) {
    easterTrigger.addEventListener("click", () => {

    document.body.classList.toggle('CrazyMode');
    console.log("background toggled");
});
}

let keys = "";

window.addEventListener("keydown", (event) => {
    keys += event.key.toLowerCase();

    console.log(keys);

    if(keys == "react"){
        showModala();
        keys = "";
    }
    else if(keys.length >= 5) {
        keys = "";
    }
});

function showModala() {
    const modal = document.getElementById("easter-modal");
    modal.classList.remove("modal-hidden");

setTimeout(() => {
modal.classList.add("modal-hidden");
}, 1500);

}
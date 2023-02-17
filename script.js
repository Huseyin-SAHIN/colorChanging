
const button = document.getElementById("button")
const time = document.querySelector(".time")

function renkDegis() {
    let rn1 = Math.floor(Math.random() * 251);
    let rn2 = Math.floor(Math.random() * 251);
    let rn3 = Math.floor(Math.random() * 251);

    document.body.style.background = `rgb(${rn1}, ${rn2}, ${rn3})`

}

renkDegis()

function countDown() {
    time.textContent--;
    time.classList.add("animation")

    if (time.textContent === "-1") {
        time.textContent = 4
    }
}

let countTime = setInterval(countDown, 1000);

button.addEventListener("click", function () {
    renkDegis()
    time.textContent = 5
    clearInterval(countTime)
    time.classList.remove("animation")
    countTime = setInterval(countDown, 1000);
});

setInterval(function () {
    if (time.textContent == 0) {
        renkDegis()
    }
}, 1000);
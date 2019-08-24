CSS.paintWorklet.addModule("./paintworklet.js")

const $display = document.getElementById("display")
const $url = document.getElementById("url")
const $set = document.getElementById("set")

$set.addEventListener("click", () => {
  $display.style.listStyleImage = `url(${$url.value})`
})

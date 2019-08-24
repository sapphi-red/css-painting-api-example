CSS.paintWorklet.addModule("./paintworklet.js")

const $url = document.getElementById("url")
const $display = document.getElementById("display")
$url.addEventListener("input", e => {
  $display.style.listStyleImage = `url(${e.target.value})`
})

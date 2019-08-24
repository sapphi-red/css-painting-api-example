CSS.paintWorklet.addModule("./paintworklet.js")

const $display = document.getElementById("display")
const $url = document.getElementById("url")
const $set = document.getElementById("set")
const $wset = document.getElementById("wset")

$set.addEventListener("click", () => {
  $display.style.listStyleImage = `url(${$url.value})`
})

$wset.addEventListener("click", async () => {
  const $img = new Image()
  $img.src = $url.value
  await $img.decode()
  $display.style.listStyleImage = `url(${$url.value})`
})

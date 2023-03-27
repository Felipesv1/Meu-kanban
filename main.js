const filterEl = document.querySelector("main input")
const cards = document.querySelectorAll(".cards li ")
const btn = document.querySelector("button")
filterEl.addEventListener("keypress", (e) => {
  if (e.key === "Enter") btn.click()
})
function filterCards() {
  if (filterEl.value != "") {
    for (let card of cards) {
      let title = card.querySelector("h3")
      title = title.textContent.toLowerCase()
      let filterText = filterEl.value.toLowerCase()
      if (!title.includes(filterText) ) {
        card.style.display = "none"
      } else {
        card.style.display = "flex"
      }
    }
  } else {
    for (let card of cards) {
      
      card.style.display = "flex"
    }
  }
}

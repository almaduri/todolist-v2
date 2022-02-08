document.addEventListener("click", (evt) => {
  const item = evt.target
  
  if(item.tagName === "DIV" && item.classList.contains("item")) {
    navigator.clipboard.writeText(item.children[1].textContent)
  } else if(item.tagName === "P" && (item.parentElement.tagName === "DIV" && item.parentElement.classList.contains("item"))) {
    navigator.clipboard.writeText(item.textContent)
  }
})
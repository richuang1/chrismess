const form = document.querySelector('form#flickForm')

const updateHeading = function(ev) {
  ev.preventDefault()
  const f = ev.target

  const flickName = f.flickName.value
  const list = document.querySelector('#flicks')
  item.textContent=flickName

  const item= document.createElement("li")
  list.appendChild(Item)

  f.reset()
}

form.addEventListener('submit', updateHeading)
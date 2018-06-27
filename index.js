const form = document.querySelector('form#flickForm')
const updateList = function(ev) {
  console.log(ev.target)
  
  ev.preventDefault()
  const f = ev.target

  const flickName = f.flickName.value
  const item= document.createElement("li")
  item.textContent=flickName
  const list = document.querySelector('#flicks')
  list.appendChild(item)


  console.log(f.flickYear)
  const flickYear = f.flickYear.value
  const year =document.createElement("li")

  year.textContent=flickYear
  list.appendChild(year)
  f.reset()
}

form.addEventListener('submit', updateList)

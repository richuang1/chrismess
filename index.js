
const button = document.querySelector('button')
const button2=document.querySelector('#submitButton')
const enter=keyCode=13
const updateText=function(){
    const p =document.querySelector('.oldestText')
    p.textContent = 'This is the updated, newer text.'
}
const updateInput=function(){
    const g=document.querySelector('h1')
    g.textContent=document.querySelector("#inputText").value
    event.preventDefault()
}
button.addEventListener('click',updateText)
button2.addEventListener('click',updateInput)
enter.addEventListener('keyup')
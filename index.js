const form = document.pests
const goomba = 5
const bob = 7
const cheep = 11

form.addEventListener("submit", function(event){
    event.preventDefault()
const goombaValue = form.goom.value 
const bobbyValue = form.bobby.value
const cheepsterValue = form.bobby.value
    const goombaTotal = goomba * goombaValue
    const bobTotal = bob * bobbyValue
    const cheepTotal = cheep * cheepsterValue
    const invoiceTotal = goombaTotal + bobTotal + cheepTotal
    const h1 = document.createElement('h1')
h1.textContent = invoiceTotal
document.getElementsByTagName("body")[0].append(h1)

})
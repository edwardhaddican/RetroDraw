const PALETTE = [
  'red',
  'blue',
  'green',
  'violet',
  'black',
  'turquoise', 
  'pink',
  'gold',
]

for (let index = 0; index < PALETTE.length; index = index + 1) {
  // access the color
  const nextColor = PALETTE[index]
  // rest of code below
  const newButton = $(`<button></button>`)
  newButton.css('background-color', nextColor)
  $('.palette').append(newButton)
}


for(let i = 0; i < 64; i++){
  const newCell = $('<div></div>').addClass('cell')
  $('.grid').append(newCell)
}
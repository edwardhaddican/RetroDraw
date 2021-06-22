
function makePalette(){
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
  $('.palette button').first().addClass('active');
}

makePalette()


function makeGrid(){
  for(let i = 0; i < 64; i++){
    const newCell = $('<div></div>').addClass('cell')
    $('.grid').append(newCell)
  }
}

makeGrid()

function onPaletteClick(){
  const currentColor = $(this)
  $('.palette button').removeClass()
  currentColor.addClass('active')
}

$('.palette button').click(onPaletteClick);

function onGridClick(){
    const currentColor = $('.palette .active').css('background-color')
    const currentCell = $(this)
    currentCell.css('backgroundColor', currentColor)
}

$('.grid .cell').click(onGridClick)

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

function onGridClick(){
    const currentColor = $('.palette .active').css('background-color')
    const currentCell = $(this)

    if(currentCell.css('backgroundColor') === currentColor){
      currentCell.css('backgroundColor', '')
    } else {
      currentCell.css('backgroundColor', currentColor)
    }
}

function onClearClick(){
  $('.grid .cell').css('backgroundColor', '')
}

function onFillAllClick (){
  const currentColor = $('.palette .active').css('background-color')

  $('.grid .cell').css('backgroundColor', currentColor)
}

function onFillEmptyClick(){
  const currentColor = $('.palette .active').css('background-color')
  const noColor = "rgba(0, 0, 0, 0)"

    const elements = $('.grid .cell')
    
    for(let i = 0; i < elements.length; i++){
      let nextElement = $(elements[i])

      if(nextElement.css('backgroundColor') === noColor){
        nextElement.css('backgroundColor', currentColor)
      }
    }
}

$('.grid .cell').click(onGridClick)
$('.palette button').click(onPaletteClick);
$('.controls .clear').click(onClearClick)
$('.controls .fill-all').click(onFillAllClick)
$('.controls .fill-empty').click(onFillEmptyClick)
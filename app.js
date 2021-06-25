
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

let mouseIsDown = false

function addNewColor(){
  let newColor = $( "form #newColor" ).val();
  $('.palette').empty()
  makePalette(newColor)
}

function createNewGrid(){
  let numberOfRows = $( "form #newHeight" ).val();
  let numberOfColumns = $( "form #newWidth" ).val();
  console.log(numberOfColumns, numberOfRows )
  let totalNumberOfCells = numberOfColumns * numberOfRows
  $('.grid').empty()

  if(numberOfColumns > numberOfRows){
   cellDimensions = 512 / numberOfColumns
  } else{
    cellDimensions = 512 / numberOfRows
  }
  const heightOfGrid = cellDimensions * numberOfRows
  const widthOfGrid = cellDimensions * numberOfColumns + 2

  $('.grid').css({'height': `${heightOfGrid}px`, 'width': `${widthOfGrid}px`})

  for(let i = 0; i < totalNumberOfCells; i++){
    const newCell = $('<div></div>').addClass('cell')
    newCell.css({'flex': `0 0 ${cellDimensions}px`, 'height': `${cellDimensions}px`})
    $('.grid').append(newCell)
  }

  $('.grid .cell').click(onGridClick)

  $('.grid').mousedown(function() {
    mouseIsDown = true
  });
  
  $('.grid').mouseup(function() {
    mouseIsDown = false
  });
  
  $( ".grid .cell" ).mouseover(function() {
      if(mouseIsDown === true){
        const currentColor = $('.palette .active').css('background-color')
        const currentCell = $(this)
    
        if(currentCell.css('backgroundColor') === currentColor){
          currentCell.css('backgroundColor', '')
        } else {
          currentCell.css('backgroundColor', currentColor)
        }
      }
  });

}

function makePalette(colorToAdd){
  if(colorToAdd){
    PALETTE.unshift(colorToAdd)
  }

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

function makeGrid(){
  for(let i = 0; i < 64; i++){
    const newCell = $('<div></div>').addClass('cell')
    $('.grid').append(newCell)
  }
}

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

makePalette()
makeGrid()

$('.grid .cell').click(onGridClick)
$('.palette button').click(onPaletteClick);
$('.controls .clear').click(onClearClick)
$('.controls .fill-all').click(onFillAllClick)
$('.controls .fill-empty').click(onFillEmptyClick)

$('#newColorForm').submit((event)=>{
  event.preventDefault()
  addNewColor()
})

$('#newGridForm').submit((event)=>{
  event.preventDefault()
  createNewGrid()
})

$('.grid').mousedown(function() {
  mouseIsDown = true
});

$('.grid').mouseup(function() {
  mouseIsDown = false
});

$( ".grid .cell" ).mouseover(function() {
    if(mouseIsDown === true){
      const currentColor = $('.palette .active').css('background-color')
      const currentCell = $(this)
  
      if(currentCell.css('backgroundColor') === currentColor){
        currentCell.css('backgroundColor', '')
      } else {
        currentCell.css('backgroundColor', currentColor)
      }
    }
});


document.addEventListener('DOMContentLoaded', () => {
    
    let playerName = 'X'
    
    const divSquare = document.querySelectorAll('.board div')
    const displayName = document.querySelector('#player') 


    divSquare.forEach(square => {
        square.addEventListener('click', squareSelection)
    })

    function squareSelection(e) {
        const nineSquares = Array.from(divSquare)
        const ticBoard = nineSquares.indexOf(e.target)
        displayName.innerHTML = playerName


        if(playerName === 'X') {
            divSquare[ticBoard].classList.add('X')
            playerName = 'O'
        } else {
            divSquare[ticBoard].classList.add('O')
            playerName = 'X'
        }
    }
})


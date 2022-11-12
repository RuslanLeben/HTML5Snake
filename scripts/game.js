const startPos = {
    x: 0,
    y: 0,
}
let direction = 'right'
let snake = fieldArray[startPos.y][startPos.x]
snake.square.classList.add('snake')

setInterval(function () {
    if (direction === 'right') {
        const currentX = snake.x
        const currentY = snake.y
        let targetX
        if (currentX >= fieldArray[currentY].length - 1) {
            targetX = 0
        } else {
            targetX = currentX + 1
        }
        

        snake.square.classList.remove('snake')
        snake = fieldArray[currentY][targetX]
        snake.square.classList.add('snake')
    }
    if (direction === 'left') {
        
    }
}, 1000)


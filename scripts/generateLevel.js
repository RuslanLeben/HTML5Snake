const SQUARE_COUNT = 49
const root = document.querySelector('#root')
const field = document.createElement('div')
field.classList.add('field')
root.append(field)

const fieldArray = []
for (let i = 0; i < 7; i++) {
    const arr = []
    fieldArray.push(arr)
    for (let j = 0; j < 7; j++) {
        const square = document.createElement('div')
        square.classList.add('square')
        field.append(square)
        fieldArray[i][j] = {
            x: j,
            y: i,
            square
        }
    }
}


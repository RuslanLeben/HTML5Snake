const SQUARE_COUNT = 49
const root = document.querySelector('#root')
const field = document.createElement('div')
field.classList.add('field')
root.append(field)

for (let i = 0; i < SQUARE_COUNT; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    field.append(square)
}
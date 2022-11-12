const fieldArray = []
for (let i = 0; i < 7; i++) {
    const arr = []
    fieldArray.push(arr)
    for (let j = 0; j < 7; j++) {
        fieldArray[i][j]= {
            x:j,
            y:i,
        
        }
    }
}
console.log (fieldArray[3][5])
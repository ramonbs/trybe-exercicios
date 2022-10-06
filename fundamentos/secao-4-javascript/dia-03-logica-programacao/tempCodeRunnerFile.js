let n = 5;
let symbol = '*';
let inputLine = '';
let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;
for(let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1){
    for(let columnIndex = 0; columnIndex <= n; columnIndex += 1){
        if(columnIndex > controlLeft && columnIndex < controlRight){
            inputLine += symbol;
        } else {
            inputLine += ' ';
        }
    }
    console.log(inputLine);
    inputLine = '';
    controlRight += 1;
    controlLeft -= 1;
}
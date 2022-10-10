function syntaxDemo(startNumber, endNumber) {
 
    let sum = 0;
    let output = '';
 
    for (let currentNumber = startNumber; currentNumber <= endNumber; currentNumber++) {
 
        if(currentNumber === endNumber){
            output += `${currentNumber}`;
        }else{
            output += `${currentNumber} `;
        }
        sum += currentNumber;
    }
    console.log(output);
    console.log(`Sum: ${sum}`);
}
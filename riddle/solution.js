// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

const CHARS = Array(26).fill().map((_, i) => String.fromCharCode('a'.charCodeAt(0) + i));

function solution(riddle) {
    // Handle single character cases
    if(riddle.length === 1){
        if(riddle === "?"){
            return CHARS[0];
        }
        return riddle;
    }

    let parsedRiddle = [...riddle.split("")];

    for(let i = 0; i < parsedRiddle.length; i++){
        const currentChar = parsedRiddle[i];

        if(currentChar === "?"){
            parsedRiddle[i] = CHARS.find(char => 
                char !== parsedRiddle[i - 1] && char !== parsedRiddle[i + 1]
            )
        }
    }

    return parsedRiddle.join("");
}

let tp = 0
let exer = 0
let sentence = "Tell me and I forget, teach me and I may remember, involve me and I learn."
for(let i=0; i <= sentence.length ; i++){
    switch (sentence[i]) {
        case "a" :
        case "e" :    
        case "i" :
        case "o" :
        case "u" :
        case "y" : tp++;
    }
    if(sentence[i] === " "){
        exer++;
    }
}
exer++;

console.log("The number of voyels is : " + tp)
console.log("The number of words is : " + exer)
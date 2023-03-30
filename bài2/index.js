

function alternatingSums(a) {
    let resultsArray = [0 , 0]
    for (let i = 0; i < a.length; i++) {
       if (i % 2 === 0) {
        resultsArray[0] += a[i]
        }
         else {
        resultsArray[1] += a[i]     
       }  
       }

    
   return resultsArray;
}
console.log(alternatingSums([ 60, 40, 55, 75, 64 ]))

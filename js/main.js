// console.log("js funziona!");
var arrayNum = [];
var i = 0;

// creo elementi della mia array
for(var count = 1; count <= 100; i++){
    arrayNum[i] = count;
    // console.log(arrayNum[i]);
    count++;
}
// console.log(arrayNum);
var j = 0;
while( j < arrayNum.length){
    if( (arrayNum[j] % 3 == 0) && (arrayNum[j] % 5 == 0)){ // se il numero è multiplo di 3 && multiplo di 5, stampa "FizzBuzz"
        console.log("FizzBuss");
    }else if(arrayNum[j] % 5 == 0){ //se il numero è multiplo di 5, stampa "Buzz"
        console.log("Buzz");
    }else if( arrayNum[j] % 3 == 0 ){ //se il numero è multiplo di 3, stampa "Fizz"
        console.log("Fizz");
    }else{
        console.log(arrayNum[j]);
    }

    j++;

}


// bastava fare una roba più easy...
// for(var i = 1; i <= 100; i++){
//     if(i % 3 == 0 && i % 5 == 0){
//         console.log("FizzBuzz");
//     }else if(i % 3 == 0){
//         console.log("Fizz");
//     }else if(i % 5 == 0){
//         console.log("Buzz");
//     }else{
//         console.log(i);
//     }
    
// }

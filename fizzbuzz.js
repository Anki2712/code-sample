/*Below fizzBuzz problem will check for first if it is 
divisible by 3 and 5, secondly it check for divisible by 3, 
third if it divisibe by 5 otherwise it will print the number*/
function fizzBuzz(){
    let i=1;
    while(i<20){
        if(i%3 == 0 && i%5 == 0){
            console.log("FizzBuzz");
        }
        else if(i%3 == 0){
            console.log("Fizz");
        }
        else if(i%5 == 0){
            console.log("Buzz");
        }
        else{
            console.log(i);
        }
        i++;
    }
}

fizzBuzz();

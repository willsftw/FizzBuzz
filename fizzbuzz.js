//Traditional Solve For Fizz Buzz using a loop
function FizzBuzzA(value1, value2){
    let returnValue = "";
    for(let i = 1;i<=100;i++){
        if(i%value1==0 && i%value2==0) {
            returnValue += 'FizzBuzz ';
            }
        else if (i%value1 == 0){
            returnValue += 'Fizz ';
            }
        else if (i%value2 == 0){
            returnValue += 'Buzz ';
            }
        else{
            returnValue += i + ' ';
            }
        }
    return returnValue;
    }

//Call and use our FizzBuzz
function buzzit(){
    let output="";
    let val1 = document.getElementById('Fizzvalue').value;
    let val2 = document.getElementById('Buzzvalue').value;
    output = FizzBuzzA(val1,val2);
    document.getElementById('results').innerHTML = output;
}
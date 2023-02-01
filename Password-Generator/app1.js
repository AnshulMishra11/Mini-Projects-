{/* 
    .console.log(Math.floor(Math.random() * 15));
    .this code can generate random number upto 15 
        .Math.floor(6.8) ,roundnumber to down value to 6 
        .random generate random word 

*/}

{/*
    pahle sabko import karlo 

*/}
const passwordElem = document.querySelector('.password');
const btnElem = document.getElementById('btn-generate');
const passwordLengthElem = document.getElementById('password-length-number');
const lowercaseElem = document.getElementById('lowercase');
const uppercaseElem = document.getElementById('uppercase');
const numbersElem = document.getElementById('numbers');
const symbolsElem = document.getElementById('symbols');


// sabki value lagado jo hai 
function Result(){
    const passlen = passwordLengthElem.value;
    const low = lowercaseElem.checked;
    const high = uppercaseElem.checked;
    const num = numbersElem.checked;
    const sym = symbolsElem.checked;
    const pas = generate(passlen,low,high,num,sym);
    passwordElem.innerText = pas;
}


const low_case = value(97, 122);
const up_case = value(65, 90);
const num_case = value(48, 57);
const sym_case = value(33, 47)
                .concat(value(58, 64))
                .concat(value(91, 96))
                .concat(value(123, 126));  


function value(min,max){
    let arr = [];
    for(let i = min; i<= max ; i++){
        arr.push(i);
    }
    return arr;
}

function generate(passlen,low,high,num,sym){
    let array = [];
    if(low){
        array = low_case; // let  98
    }
    // we can't do else if because it will choose only one option then 
    if(high){
        array = array.concat(up_case); // let 69
    }
    if(num)
        array = array.concat(num_case);
    if(sym)
        array = array.concat(sym_case);
       
   
   
    const finalPass = [];
    for(let i = 0;i<passlen;i++){
        const randompass = array[Math.floor(Math.random()*array.length)];
        
        finalPass.push(String.fromCharCode(randompass))
        //without fromCharcode it give number more than 
        // like 54 56 55 49 49 56 55 53 , also a password 
    } 
    if(array.length === 0) 
        return ``;
    return finalPass.join(" ");
    // concat give commna after each number 

}


// call kiya jayega
btnElem.addEventListener('click',Result);





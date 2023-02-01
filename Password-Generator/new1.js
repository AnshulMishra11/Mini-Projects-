let el_down = document.getElementById("g");
let lab_len = document.getElementById('length-number'); 
let btnElem = document.getElementById('btn')
/* Function to generate combination of password */
var pass = '';
    
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
            'abcdefghijklmnopqrstuvwxyz0123456789<>@#$' ;
var str1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' ;
var str2 = 'abcdefghijklmnopqrstuvwxyz';
var str3 = '0123456789';
var str4 = '@#$';

function generateP() {
    
    const len = lab_len.value;
    for (let i = 1; i <= len; i++) {
        var char = Math.floor(Math.random()* str.length);				
        pass += str.charAt(char) 
        
        //pass.push(String(str.(fromCharCode(char)))
    }
    
    return pass.concat("   ");
}

function gen(){
    el_down.innerHTML = generateP();
}

btnElem.addEventListener('click',gen);


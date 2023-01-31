//enhance code beauty with my brain 


//getElementById is for id 
//querySelector is for class



const weightid = document.getElementById('weight');
const heightElem = document.getElementById('height');
const bmiid = document.querySelector('.bmi');
const descid = document.querySelector('.desc');
const bmicatid = document.querySelector('.bmi-category');
const welcomeid = document.querySelector('.welcome');
const changeid = document.querySelector('.change');
const change2id = document.querySelector('.change2');
const container1 = document.querySelector('.container');



let bmiresult;
function calcBMI(){
    let weight = weightid.value;  //important
    let height = heightElem.value; //important
   
    bmiresult = (weight / (height * height) * 10000).toFixed(3); 
   
}


function check(value){
    if(isFinite(value)){
        if(value >= 30.0){
            bmicatid.style.color = 'black';
            bmiid.style.color = 'pink';
            bmiid.style.borderColor = 'red';
            welcomeid.style.display = 'none';
            changeid.style.display = 'none';
            change2id.style.display = 'flex';
            return "Obese 🤒";
        }else if(value >= 25.0 && value <= 29.9){
            bmicatid.style.color = '#8a4f02';
            bmiid.style.color = '#8a4f02';
            bmiid.style.borderColor = '#8a4f02';
            welcomeid.style.display = 'none';
            changeid.style.display = 'none'
            return "Overweight 🤐";
        }else if(value >= 18.5 && value <= 24.9){
            bmicatid.style.color = '#2ca1bc';
            bmiid.style.color = '#2ca1bc';
            bmiid.style.borderColor = '#2ca1bc';
            welcomeid.style.display = 'none';
            changeid.style.display = 'none'
            return "Normal 🙂";
        }else if(value <= 18.4) {
            bmicatid.style.color = '#625301';
            bmiid.style.color = '#625301';
            bmiid.style.borderColor = '#625301';
            welcomeid.style.display = 'none';
            changeid.style.display = 'none'
            return "Underweight 😥";
        }
        
    }else {
        bmicatid.style.color = 'black';
        return " ";
    }
}


function FINAL(){

    calcBMI()
    if(isFinite(bmiresult)){
        bmiid.innerHTML = bmiresult 
    }else{
        return bmiid
    }
    bmicatid.innerHTML = check(bmiresult)

}

container1.addEventListener('input', FINAL);



//getElementById is for id 
//querySelector is for class

const weightid = document.getElementById('weight');
const heightid = document.getElementById('height');
const bmiid = document.querySelector('bmi');
const descid = document.querySelector('desc');
const bmicatid = document.querySelector('bmi-category');
const container1 = document.querySelector('.container');

// bmi = weight/(height**2)


let bmiresult;
function calcBMI(){
    let weight1 = weightElem.value;
    let height1 = heightElem.value;
    let bmi = weight1 / (height1 * height1); // bmi in kg/cm*cm
    bmiresult = (bmi * 10000).toFixed(3); //bmi in kg/m*m rounded to 1 decimal
    // console.log(bmiMetric);
}
function check(value){
    if(isFinite(value)){
        if (value >= 30){
            bmiid.style.color = 'yellow';
            descid.style.color = 'red';
            return `extreme overweight`
        }
        else if(value >= 25 && value <= 29){
            bmiid.style.color = 'black';
            descid.style.color = 'pink';
            return `overweight`
        }
        else if(value >= 20 && value <= 24){
            bmiid.style.color = 'white';
            descid.style.color = 'grey';
            return `normal`
        }
        else if (value <= 19){
            bmiid.style.color = 'gold';
            descid.style.color = 'brown';
            return `underweight`
        }
    }else{
        bmiid.style.color = 'black';
        return ``;
    }
}

function UpdateUI(){

    calcBMI()
    if(isFinite(bmiresult)){
        bmiid.innerHTML = bmiresult 
    }
    bmicatid.innerHTML = check(bmiresult)

}

container1.addEventListener('input', updateUI)
const name1 = document.querySelector('.name');
const img1 = document.querySelector('.img');
const fullname1 = document.querySelector('.fullname');
const company1 = document.querySelector('.company');
const brain1 = document.getElementById('brain');
const strengthEl = document.getElementById('strength');
const speedEl = document.getElementById('speed');
const powerEl = document.getElementById('power');


function urlFetch(){
    let x = Math.floor(Math.random() * 731) ; //random integer b/w 1 and 731
    let y = `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${x}.json`;
    

    
    fetch(y)
    .then(data => data.json())
    
    
    .then(response => {
        name1.innerText = response.name;

        img1.src = response.images.sm;
        {/**img1.setAttribute('alt', response.name); **/}

        fullname1.innerText = response.biography.fullName;
        company1.innerText = response.biography.publisher;
        brain1.innerText = response.powerstats.intelligence;
        strengthEl.innerText = response.powerstats.strength;
        speedEl.innerText = response.powerstats.speed;      
        powerEl.innerText = response.powerstats.power;
        
    })
    {/** 
    .catch(error => {
        console.log('problem : ', error);
        
    });
**/}
}

window.addEventListener('load', urlFetch);   
// why window used after 
{/*
    .then(responseponse => {
        if(!responseponse.ok){
            url(); //re fetch with new apiURL if responseponse wasn't ok
            throw new Error('Network responseponse was not ok');
        } 
        return responseponse.json();
    })
*/}

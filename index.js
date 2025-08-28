const heartCounter=document.getElementById('heart-count')
let heartCount=0;
const heartIcons=document.querySelectorAll('.heart-click');
for(const icon of heartIcons){
    icon.addEventListener('click',function(){
        console.log("hi");
        
        heartCount++;
        heartCounter.textContent=heartCount;
    })
}

// call and coin use section

let coin=100;

const coinCount = document.getElementById('coin-count');
const callBtn = document.querySelectorAll('.call-btn');

for(const button of callBtn){
    button.addEventListener('click', function(){
        
    const card = button.closest('.card');
    const serviceName= card.querySelector('h1').innerText;

    const serviceNumber= card.querySelector('.number').innerText;

    if(coin<20){
        alert('Not enough to make a call');
        return;     
    }
    alert(`Calling ${serviceName} -${serviceNumber}`);
    coin -= 20;
    coinCount.innerText=coin;
    
    })
};




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

// Call History Section and coin use section

let coin=100;

const coinCount = document.getElementById('coin-count');
const callBtn = document.querySelectorAll('.call-btn');
const history = document.querySelector('.history-box');

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
    
    // Call History

    const date =new Date();
    const time = date.toLocaleTimeString();

    const newHistory = document.createElement('div');

    newHistory.innerHTML=`
        <div class="flex justify-between items-center bg-[rgba(250,250,250,1)] rounded-lg mt-2 p-2">
       <div>
        <p class="font-bold">${serviceName}</p>
        <p class="text-gray-500">${serviceNumber}</p>
      </div>
      <div>
        <p>${time}</p>
      </div>
      </div>
    `;

    history.appendChild(newHistory);
    
    });
}




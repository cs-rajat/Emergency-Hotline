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


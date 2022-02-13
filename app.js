function generateNumber(){
    const pinNumber=  Math.round(Math.random()*1000000);
    const pin = pinNumber + '';
    if(pin.length ===6){
        return pin;
    }
    else{
        return generateNumber();    
    }
}
const pinInput = document.getElementById('pin-input');
document.getElementById('generate-pin').addEventListener('click',function(){
      pinInput.value = generateNumber();
})
const buttons = document.getElementsByClassName('button');
const calcInput =document.getElementById('calc-input');
for (const button of buttons){
    button.addEventListener('click',function(e){
       
       switch (e.target.innerText){
           case ('C'):
               calcInput.value = ''
               break;
               case ('←'):
                   calcInput.value = calcInput.value.slice(0,-1);
                   break;
           default:
               calcInput.value +=e.target.innerText;
       }
   })
}
const validation = document.getElementById('validation');
const submit =document.getElementById('submit');
submit.addEventListener('click',function(){
      const notifySuccess =document.getElementById('notify-success');
      const notifyWrong=document.getElementById('notify-wrong');
      if(validation.innerText == 0){
         alert ("Please Try Again Letter");
         submit.setAttribute("disabled",true)
      }
      else if(parseInt( validation.innerText)<= 6){
        if(pinInput.value == calcInput.value){
            notifySuccess.style.display ='block';
            notifyWrong.style.display = 'none'
            validation.innerText = 6;
        }
        else{
           notifySuccess.style.display ='none';
           notifyWrong.style.display = 'block'
           validation.innerText = parseInt(validation.innerText) - 1;
        }
      }
})
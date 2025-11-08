let btnShow= document.querySelector('#btnShow');
let inputN=document.querySelector('#inputNumber');
let viewR=document.querySelector('#view')

function isPerfectNumber(value){
    let sum=1;

    for(let i=2;i*i<value;i++){
        if(value%i===0)
        {
            if(i*i!=value){
                sum+=i + value/i;
            }else{
                sum+=i;
            }
        }
    }
    return sum===value && value!==1;
}


btnShow.addEventListener('click',()=>{
  let value =Number(inputN.value);
  if(isPerfectNumber(value)){
    viewR.textContent= value + " la so hoan hoa";
  }else {
    viewR.textContent= value +" khong la so hoan hao"
  }
    
})
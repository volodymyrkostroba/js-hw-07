const incrementRef = document.querySelector('[data-action="increment"]');
const decrementRef = document.querySelector('[data-action="decrement"]');
const valueRef = document.querySelector('#value');


incrementRef.addEventListener('click', incrementHandler );
decrementRef.addEventListener('click', decrementTHandler)


function incrementHandler(){
  let total = Number(valueRef.textContent);
  total +=1;
  
  return valueRef.textContent = total;
}

function decrementTHandler(){
  let total = Number(valueRef.textContent);
  total -=1;

  return valueRef.textContent = total;
}



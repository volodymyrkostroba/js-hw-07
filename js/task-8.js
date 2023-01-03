const renderRef = document.querySelector('[data-action="render"]');
const destroyRef = document.querySelector('[data-action="render"]');
const inputRef = document.querySelector('.input');
const boxesRef = document.querySelector('#boxes');

// inputRef.addEventListener('blur', createBoxes);

// const num = inputRef.addEventListener('blur', function (e) {
//     return e.target.value;
// });


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createBoxes(amount){
    let arr = [];

    for(let i = 0; i < amount; i+=1){
        // arr.push(document.createElement('div'));

     let el = document.createElement('div');
     el.classList.add('box');
     el.style.backgroundColor = getRandomColor();
     el.style.height = '150px';
     el.style.width = '150px'
     arr.push(el);
    }

   return boxesRef.append(...arr);
   
}

createBoxes(5);
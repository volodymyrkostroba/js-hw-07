const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients');


ingredients.forEach(e =>{
  let itemRef = document.createElement('li');

  itemRef.classList.add('ingredients__item')
  itemRef.textContent = e;

  ingredientsRef.appendChild(itemRef)

  console.log(itemRef);
})



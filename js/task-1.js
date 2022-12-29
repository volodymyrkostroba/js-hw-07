const categoriesRef = document.querySelectorAll('.item');

console.log( `В списке ${categoriesRef.length} категории`);

categoriesRef.forEach(e =>{
  console.log(`категория ${e.querySelector('h2').textContent}`);
  console.log(`количество элементов : ${e.querySelectorAll('li').length}`);
})


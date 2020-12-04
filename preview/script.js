//"use strict";

const btn = document.querySelector('button'),
      overlay = document.querySelector('.overlay');

//btn.addEventListener('click', () => {
//
//    alert('Click');
//
//});



// btn.addEventListener('click', (e) => {
//     console.log(e.target);
//     e.target.remove();
//     // console.log('Hover');
// });
//let i = 0;
const deleteElement = (e) => {
    console.log(e.currentTarget);
console.log(e.type);
//    i++;
//    if (i == 1) {
//        btn.removeEventListener('click', deleteElement);
//    }
};

//btn.addEventListener('click', deleteElement);
//overlay.addEventListener('click', deleteElement);
btn.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});
});

//...................Отмена стандартных поведение браузера................



const link = document.querySelector('a');

link.addEventListener('click', (event) => {

    event.preventDefault();
    console.log(event.target)
})

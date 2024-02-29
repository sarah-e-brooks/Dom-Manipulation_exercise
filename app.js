const getElId = document.getElementById("container");
console.log(getElId)
const getElIdquery = document.querySelector('#container');
console.log(getElIdquery)
const secondClass = document.querySelectorAll('.second');
console.log(secondClass)
const thirdClassOl = document.querySelector("ol .third");
console.log(thirdClassOl)

const helloContainer = document.querySelector('#container');
// helloContainer.innerText = 'Hello';

let footer = document.querySelector('.footer');
footer.classList.add("main");
console.log(footer.classList)

footer.classList.remove('main');
console.log(footer.classList)

let newLi = document.createElement('li');
newLi.innerText = 'four';
console.log(newLi.innerText)

let list = document.querySelector("ul");
list.appendChild(newLi)
console.log(list);

let liInsideOl = document.querySelectorAll('ol li');
for (let i = 0; i < liInsideOl.length; i++) {
    liInsideOl[i].style.backgroundColor = 'green';
}

let footer2 = document.querySelector('.footer');
footer2.remove();
console.log(footer2)
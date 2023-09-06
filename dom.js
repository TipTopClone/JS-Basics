//find first and grab which elements you want to change

// const elm = document.getElementById('first');
// const elm = document.getElementsByClassName('info1');
// const elm = document.getElementsByTagName('div');
// const elm = document.querySelectorAll('div > div');

// const elm = document.querySelector('#first');
// const elm = document.querySelector('.info1');

// console.log(elm);

// apply the change
// document.write('Hehehehhehehehehehe');

// const display = document.getElementsByClassName('display');
// const display = document.querySelector('.info1');

// const txt = display.innertext;
// const txt = display.innerHTML;
// console.log(txt);

// const display = document.getElementsByClassName('display')[0];
// 0 ley chai first index ko class matra linxa

// display.innerText = 'Asim Shrestha';
// display.innerHTML = '<h1>Asim Shrestha</h1>';
// console.log(display);

// display.setAttribute('style', 'color: red; font-size: 3rem');
// display.setAttribute('href', 'facebook.com');

// const element = document.getElementsByTagName('a');
// console.log(element);

// const elm = document.querySelector('a');
// console.log(elm.attributes.href.value);

// elm.style.color = 'red';
// elm.style.fontSize = '2rem';
// elm.style.textDecoration = 'none';
// elm.style.display = 'none';
// elm.style.display = 'block';

// const display = document.querySelector('.display');
/*
const func = () => {
  display.classList.toggle('success');
};
*/

// yo line chai sidai js batai click event on garna without touching html

// display.addEventListener('click', func);

// OR

// yo chai js mai tara ES16 use garera
/*
display.addEventListener('click', () => {
  display.classList.toggle('success');
});
*/

const fun = () => {
  const name1 = document.querySelector('.display');

  const name = name1.innerText;
  const nameArr = name.split('');
  const nameAr = nameArr.reverse();
  const nameFinal = nameAr.join('');

  const display = document.getElementsByClassName('display')[0];

  display.innerText = nameFinal;
};

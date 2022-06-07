const price1 = document.querySelector("#keyboard1");
const target1 = document.querySelector("#keyboard1 h1");
const price2 = document.querySelector("#keyboard2");
const target2 = document.querySelector("#keyboard2 h1");
const price3 = document.querySelector("#keyboard3");
const target3 = document.querySelector("#keyboard3 h1");

price1.addEventListener('mouseover', () => {
  target1.style.display ='block'
})
price1.addEventListener('mouseout', () => {
  target1.style.display ='none'
})

price2.addEventListener('mouseover', () => {
  target2.style.display ='block'
})
price2.addEventListener('mouseout', () => {
  target2.style.display ='none'
})

price3.addEventListener('mouseover', () => {
  target3.style.display ='block'
})
price3.addEventListener('mouseout', () => {
  target3.style.display ='none'
})


let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  
  document.getElementById("main-title").innerHTML = "My name is DOM"; 
document.body.style.backgroundColor = "red";

let fav = document.getElementById("favorite-things");
fav.removeChild(fav.lastElementChild);

document.getElementById("main-title").innerHTML = "My name is DOM";

document.querySelectorAll('.special-title').style.fontSize="2rem";

let race = document.getElementById("past-races");
race.removeChild(race.lastElementChild);

let listChildren = race.children;
console.log(listChildren);

for (let i = 0; i < listChildren.length; i++) {
console.log(listChildren[i]);
}





const orita = document.createElement(race.li);
orita.textContent = 'Springfield';
race.appendChild(orita)
listChildren.appendChild(orita)
let nochi = document.querySelectorAll(".past-races li");
nochi.appendChild(orita)

for (let i = 0; i < nochi.length; i++) {
console.log(nochi[i])

}
 




document.querySelectorAll('.past-races li')
    this.addEventListener.addEventListener('click', function() {
      var li = this.parentNode
      li.remove(4,1)
    })
  


    nochi.addEventListener('click',function(e){
      if(e.target.className == "remove"){ 
      let length = document.querySelectorAll('li').length;
      if(length > 4){ 
      let remove = e.target.parentNode;
      remove.parentNode.removeChild(remove);
      }
      }
  });






})

const randomQuote = function() {
  document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  document.querySelector('#quote-title').addEventListener('click', randomQuote);
};
randomQuote();

  // Do all of your work inside the document.addEventListener  

  // Part 1


  // Part 2


  // Part 3


  // Part 4


  // Part 5


  // Part 6


  // Part 7


  // Part 8


  // Part 9





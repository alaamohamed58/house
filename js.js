const imgArray = [`img/house1.jfif`, `img/house2.jpg`, `img/house3.jpg`, `img/house4.jpg`, `img/house5.jpg`
, `img/house6.jpg` , `img/house7.jpg`, `img/house8.jpg`, `img/house9.jpg`];
let houseSlide = document.createElement('div');
houseSlide.classList.add("houseslide");














// let texts = ["hello", "i am ", "dada", "ddadaf", "dafarae", "da", "da", "last"] ;
// console.log
// for(let j = 0 ; j < texts.length; j++){
//     h5.innerText = texts[j]
// }

for(let i = 0; i < imgArray.length; i++){
    //content
    let content = document.createElement('div');
    content.setAttribute('class', 'content');
    
    //h5 - h3
    let h5 = document.createElement('h5');
    let h3 = document.createElement('h3');




    //images
    let img = document.createElement("img");
    img.src = imgArray[i];
    
    //insert
    content.appendChild(h5);
    content.appendChild(h3);
    content.appendChild(img);

    houseSlide.appendChild(content);
    document.querySelector('section.projects .container').appendChild(houseSlide)

}

let allh5 = document.querySelectorAll("section.projects  .houseslide h5");
allh5[0].textContent = "north coast & alex" ;
allh5[1].textContent = "west cairo" ;
allh5[2].textContent = "red sea" ;
allh5[3].textContent = "east cairo" ;
allh5[4].textContent = "north cairo" ;
allh5[5].textContent = "south cairo" ;
allh5[6].textContent = "alex" ;
allh5[7].textContent = "red sea" ;
allh5[8].textContent = "west cairo" ;
//h3
let allh3 = document.querySelectorAll("section.projects  .houseslide h3");
allh3[0].textContent = "sokhna" ;
allh3[1].textContent = "westlane" ;
allh3[2].textContent = "golf central" ;
allh3[3].textContent = "palm hills" ;
allh3[4].textContent = "golf new cairo" ;
allh3[5].textContent = "westlane" ;
allh3[6].textContent = "golf new cairo" ;
allh3[7].textContent = "sokhna" ;
allh3[8].textContent = "golf new cairo" ;






const container = document.querySelector(".projects .container");
const cards = document.querySelector(".projects .houseslide");
console.log(container);
console.log(cards);

/* keep track of user's mouse down and up */
let isPressedDown = false;
/* x horizontal space of cursor from inner container */
let cursorXSpace;

container.addEventListener("mousedown", (e) => {
  isPressedDown = true;
  cursorXSpace = e.offsetX - cards.offsetLeft;
  container.style.cursor = "grabbing";
});

container.addEventListener("mouseup", () => {
  container.style.cursor = "grab";
});

window.addEventListener("mouseup", () => {
  isPressedDown = false;
});

container.addEventListener("mousemove", (e) => {
  if (!isPressedDown) return;
  e.preventDefault();
  cards.style.left = `${e.offsetX - cursorXSpace}px`;
  boundCards();
});

function boundCards() {
  const container_rect = container.getBoundingClientRect();
  const cards_rect = cards.getBoundingClientRect();

  if (parseInt(cards.style.left) > 100) {
    cards.style.left = 0;
  } else if (cards_rect.right < container_rect.right) {
    cards.style.left = `-${cards_rect.width - container_rect.width}px`;
  }
}
//

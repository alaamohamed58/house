window.addEventListener("scroll", function(){
    scrollY > 900 ? document.getElementById("top").style.display = "flex":document.getElementById("top").style.display = "none";

});
document.getElementById("top").onclick = function(){
   window.scrollTo({
       top : 0,
       behavior : "smooth",
   });
};

//header
document.querySelector('.fa-search').onclick = function(){
document.querySelector('header .search').classList.toggle('active');
}
//nav
document.querySelector('.hambarger').onclick = function(){
    if(document.querySelector('nav').classList.contains("active")){
        document.querySelector('nav').classList.remove("active")
        this.classList.remove("active");

    }else{
        document.querySelector('nav').classList.add("active")
        this.classList.add("active");
    }
};
console.log( document.querySelector("header"))
window.addEventListener("scroll", function(){
     let landing = document.querySelector("section.projects"); 
    if(window.scrollY >= landing.offsetTop){
        document.querySelector("header").classList.add("active");

    }else{
        document.querySelector("header").classList.remove("active")
      
    }})


//slider show
//set
let slides = Array.from(document.querySelectorAll('.landing .slide')),
slideLength = slides.length,
currentSlide = 1;

//checkerFunction
function checker(){
    //removeAllActive
    remove()
    slides[currentSlide - 1].classList.add('active');

};
checker();
function remove(){
    slides.forEach((a)=>{
        a.classList.remove('active')
    })
};
let next = setInterval(function(){
    
    if(currentSlide === slideLength){
        currentSlide = 1 ;
    }else{
        currentSlide++;
    }
    checker();
}, 6000);
//projects section
Array.from(document.querySelectorAll('.projects .container .choices > div')).forEach((a)=>{
    a.addEventListener('click',function(){
        a.querySelector('.projects .container .choices > div ul').classList.toggle('active');
        a.classList.toggle('active')

    } );
})
//footer
let arrFooter = ["about palm hills",
"chairman message",
"board of directors",
"vision and mission",
"corporate strategy",
"our portfolio"],
colOne = document.createElement('div'),
colTwo = document.createElement('div'),
colThree = document.createElement('div'),
footerList1 = document.createElement("ul")

colOne.classList = "col one" ; //done
colTwo.classList = "col two" ; 
colThree.classList = "col three" ; 

/*col one */
let h3 = document.createElement('h3');
h3.textContent = "who we are";
for(var i = 0 ; i < arrFooter.length; i++){
    let li = document.createElement("li");
    li.textContent = arrFooter[i];
    footerList1.appendChild(li);
    colOne.appendChild(footerList1);
    document.querySelector('footer .container').prepend(colOne);
};
document.querySelector('footer .container .one').prepend(h3);


/*col two */
let arrFooter2 = ["financial info",
"stock info",
"analyst coverage",
"press releases",
"financial calender",
"corporate governance",
"EGX disclosures"],
 h3Two = document.createElement('h3'),
 footerList2 = document.createElement("ul");
h3Two.textContent = "investor relations";
for(var i = 0 ; i < arrFooter2.length; i++){
    let li = document.createElement("li");
    li.textContent = arrFooter2[i];
    footerList2.appendChild(li);
    colTwo.appendChild(footerList2);
    document.querySelector('footer .container .one').after(colTwo);
};
document.querySelector('footer .container .two').prepend(h3Two);

//col three 
let arrFooter3 = ["CSR",
"careers",
"contact us"],
footerList3 = document.createElement("ul");
for(var i = 0 ; i < arrFooter3.length; i++){
    let h3 = document.createElement("h3");
    h3.textContent = arrFooter3[i];
    footerList3.appendChild(h3);
    colThree.appendChild(footerList3);
    document.querySelector('footer .container .two').after(colThree);
};

//last div
// let colFour = document.createElement("div");
// colFour.classList = "col four" ;
// let lastArr = ["latest", "earnings", "release"]; 
// for(let i = 0; i < lastArr.length; i++){
//     let h4 = document.createElement("h4");
//     h4.textContent = lastArr[i];
//     colFour.appendChild(h4)
//     document.querySelector('footer .container').appendChild(colFour);
// }

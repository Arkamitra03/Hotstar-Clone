//selecting carousal element from html 
const carousel = document.querySelector('.carousal');
//array to store the image slides
let sliders = []
//current slide index
let slideIndex = 0;



//movies is an array of movie name and description and images in data.js
//func which will create slide
const createSlide = () => {
    if(slideIndex >= movies.length){
        slideIndex=0;
        //slideIndex++ hoye carousal movement hocche movie array r length 4 jokhon seta exceed kore jabe tokhon abar slideIndex 0 set kore dicchi jate carousal movement cholte thake abar suru theke
    }
    //html e je structure ta carousal banaor same structure e add korbo createElement e
    //creating dom element
    let slide = document.createElement('div'); //slider
    let imgElement = document.createElement('img'); //img
    let content = document.createElement('div'); //slidecontent
    let h1 = document.createElement('h1'); //movie name
    let p = document.createElement('p'); //movie des

    //attaching all elements
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    slide.className= 'slider';
    content.className = 'slide-content';
    h1.className = 'movie-name';
    p.className = 'movie-details';
    //first e je sliders empty array declare kora hoyeche tar moddhe puro byapar ta push korbo
    sliders.push(slide);
    if(sliders.length){
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length-2)}% - ${30* (sliders.length - 2)}px)`;
    }
}

for(let i=0;i<3;i++){
    createSlide();
}
//after every 3 seconds calling the func mane 3 sec por por slide ghurbe
setInterval(() =>{
    createSlide();
},3000);

//for playing video
const videocards =[...document.querySelectorAll('.video-card')] ;
//proti ta video cards e mouse hover korle video play hobe abar mouse soriye nile video play bondho hobe
videocards.forEach(item => {
    item.addEventListener('mouseover',()=>{
        let video = item.children[1];
        video.play();
       
    })
    item.addEventListener('mouseleave',()=>{
        let video = item.children[1];
        video.pause();
       
    })

})
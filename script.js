/*let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let listItemDom = document.querySelector('.carousel .list');
let thumbnailDom = document.querySelector('.carousel .thumbnail');

nextDom.onclick=function(){
    showSlider('next');
}
prevDom.onclick=function(){
    showSlider('prev')
}
let timeRunning=3000;
let timeAutoNext=7000;
let runTimeOut;
let runAutoRun;
function showSlider(type){
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carouselDom.classList.add('next');
    }else{
        let positionLastItem = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemSlider[positionLastItem]);
        carouselDom.classList.add('prev')
    }
    clearTimeout(runTimeOut);
    runTimeOut=setTimeout(() =>{
        carouselDom.classList.remove('next');
    },timeRunning);

    clearTimeout(runAutoRun);
    runAutoRun=setTimeout(()=>{
     nextDom.click();
}, timeAutoNext);
}
*/

let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let listItemDom = document.querySelector('.carousel .list');
let thumbnailDom = document.querySelector('.carousel .thumbnail');

nextDom.onclick = function () {
    showSlider('next');
}
prevDom.onclick = function () {
    showSlider('prev');
}

let timeRunning = 3000;   // duration of CSS animation
let timeAutoNext = 7000;  // autoplay interval
let runTimeOut;
let runAutoRun;

function showSlider(type) {
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

    if (type === 'next') {
        // move first slide to the end
        listItemDom.appendChild(itemSlider[0]);
        // move first thumbnail to the end
        thumbnailDom.appendChild(itemThumbnail[0]);
        carouselDom.classList.add('next');
    } else {
        let positionLastItem = itemSlider.length - 1;
        // move last slide to the beginning
        listItemDom.prepend(itemSlider[positionLastItem]);
        // move last thumbnail to the beginning (✅ FIXED line)
        thumbnailDom.prepend(itemThumbnail[itemThumbnail.length - 1]);
        carouselDom.classList.add('prev');
    }

    // reset animation classes after it finishes
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    // autoplay setup
    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(() => {
        nextDom.click();
    }, timeAutoNext);
}

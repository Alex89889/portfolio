/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("carousel__item");
   
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
   
    slides[slideIndex - 1].style.display = "block";
    
}


function swipedetect(el){
    let surface = el;
    let startX = 0;
    let startY = 0;
    let distX = 0;
    let distY = 0;
    let startTime = 0;
    let elapsedTime = 0;
    let threshold = 150;
    let restraint = 100;
    let allowedTime = 300;

    function newDoc() {
        window.location.assign("https://www.w3schools.com")
    }

    surface.addEventListener('touch',function(e){
        console.log(e.target.classList)
        if(e.target.classList.contains('slide__img') && distX==0){
            let href = document.createElement('a');
            href.setAttribute('href','./repair.html') ;
            let node=document.querySelector('.slide__img');
            node.before(href);
            console.log(node);
            window.location.pathname='../repair.html';
            newDoc();
        }
    })

    surface.addEventListener('mousedown', function(e){
        startX = e.pageX;
        startY = e.pageY;
        startTime = new Date().getTime();
        e.preventDefault();
    });
    surface.addEventListener('mouseup', function(e){
        distX = e.pageX - startX;
        distY = e.pageY - startY;
        elapsedTime = new Date().getTime() - startTime;
    
        if(elapsedTime <= allowedTime){
            if (Math.abs(distX) >= threshold && Math.abs(distY) < restraint){
                if(distX > 0){
                    if(isEnabled){
                        previousItem(currentItem);
                    }
                }else{
                    if(isEnabled){
                        nextItem(currentItem);
                    }
                }
            }
        }

        e.preventDefault();
    });

    surface.addEventListener('touchstart', function(e){
        

        if (e.target.classList.contains('arrow') || e.target.classList.contains('control')){
            if (e.target.classList.contains('left')){
                if(isEnabled){
                    previousItem(currentItem);
                }
            }
        }
            if (e.target.classList.contains('arrow') || e.target.classList.contains('control')){
                if (e.target.classList.contains('right')){
                    if(isEnabled){
                        nextItem(currentItem);
                    }
                }
        }
        let touchObj = e.changedTouches[0];
        startX = touchObj.pageX;
        startY = touchObj.pageY;
        startTime = new Date().getTime();
        e.preventDefault();
    });
    surface.addEventListener('touchmove', function(e){
        e.preventDefault();
    });
    surface.addEventListener('touchend', function(e){

        let touchObj = e.changedTouches[0];
        distX = touchObj.pageX - startX;
        distY = touchObj.pageY - startY;
        elapsedTime = new Date().getTime() - startTime;
    
        if(elapsedTime <= allowedTime){
            if (Math.abs(distX) >= threshold && Math.abs(distY) < restraint){
                if(distX > 0){
                    if(isEnabled){
                        previousItem(currentItem);
                    }
                }else{
                    if(isEnabled){
                        nextItem(currentItem);
                    }
                }
            }
        }
        e.preventDefault();

        console.log(e.target.classList)
        if(e.target.classList.contains('slide__img') && distX==0){
            let href = document.createElement('a');
            href.setAttribute('href','./repair.html') ;
            let node=document.querySelector('.slide__img');
            node.before(href);
            console.log(node)
        }
    });

}

document.querySelector('.left').addEventListener('click',function(){
  minusSlide();
});
document.querySelector('.right').addEventListener('click',function(){
  plusSlide();
});

let el = document.querySelector('.carousel');
swipedetect(el);




let elIframe=document.querySelector('iframe');
let bodyContainer=document.querySelector('body');
let widthBody=getComputedStyle(bodyContainer);
elIframe.style.width=widthBody.width;

function changeToMobile(){
	let buttonMobile = document.querySelector('.button__mobile')
   let buttonDesktop = document.querySelector('.button__desktop')
   let container = document.querySelector('.iframe-container')
   let main = document.querySelector('.main')
   elIframe.style.width='375px'; 
   main.style=`display:flex;
               flex-direction:row;`;
   container.style=`display:inline`;
   buttonMobile.style.top='77%';
   buttonDesktop.style.top='70%';
}

function changeToDesctop(){
	let container= document.querySelector('.iframe-container')
    let buttonMobile= document.querySelector('.button__mobile')
    let buttonDesktop= document.querySelector('.button__desktop')
    elIframe.style.width='1440px'
    container.style=`display:none`;
    buttonMobile.style.top='70%';
    buttonDesktop.style.top='77%';
}

document.querySelector('.button__mobile').addEventListener('click',function(){
  changeToMobile();
});

document.querySelector('.button__desktop').addEventListener('click',function(){
   changeToDesctop();
 });



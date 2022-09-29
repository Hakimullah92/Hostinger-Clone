//hosting
let hosting=document.querySelector('.host');
let hostmenu=document.querySelector('.hosting-sub-menu');
hosting.addEventListener('click', function(){
 hosting.classList.toggle('active');
 hostmenu.classList.toggle('active');
});

//VPS
let vps=document.querySelector('.vps');
let vpsmenu=document.querySelector('.VPS-sub-menu');
vps.addEventListener('click', function(){
   vps.classList.toggle('active');
   vpsmenu.classList.toggle('active');
});

//Email
let email=document.querySelector('.email');
let emailmenu=document.querySelector('.Email-sub-menu');
email.addEventListener('click',function(){
    email.classList.toggle('active');
    emailmenu.classList.toggle('active');
});

//Domain
let domain=document.querySelector('.domain');
let domainmenu=document.querySelector('.Domain-sub-menu');
domain.addEventListener('click',function(){
 domain.classList.toggle('active');
 domainmenu.classList.toggle('active');
});

//navbar
let navicon=document.querySelector('.menu');
let navbar=document.querySelector('.navbar');
navicon.addEventListener('click', function(){
    navbar.classList.toggle('active');
});

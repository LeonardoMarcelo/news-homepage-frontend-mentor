let nav_toggle = document.querySelector('#nav_toggle')
let nav__mobile  = document.querySelector('.nav_mobile')
let nav_close  = document.querySelector('.nav__close')

nav_toggle.addEventListener('click',function(){

    nav__mobile.classList.toggle('active');
   
//

})
nav_close.addEventListener('click', ()=> {
    nav__mobile.classList.remove('active');
})
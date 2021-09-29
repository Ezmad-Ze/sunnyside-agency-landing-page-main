var checkbox = document.querySelector('#nav-checkbox');
var hamburger = document.querySelector('.nav-hamburger');
const mediaQuery = window.matchMedia('(max-width: 768px)');
var nav=document.querySelector('.top-nav ul');
checkbox.addEventListener('click',(e)=>{
    check(mediaQuery);
})
function check(mediaQuery) {
    if (mediaQuery.matches) {
        if (checkbox.checked == true ){
            nav.style.display='block';
            hamburger.style.top='-26rem'
        }else if (checkbox.checked == false) {
            nav.style.display='none';
            hamburger.style.top='-9rem'
        }
    } 
    else{
        nav.style.display='flex';
        
    }
}
mediaQuery.addEventListener('change' , check);
let nav= document.getElementById('navbar-menu');
let toogle=document.getElementById('toogle');


window.onscroll=function(){scrollF()}

const scrollF=()=>{
    let scroll= window.scrollY;
    if(scroll>0) {
        nav.style.backgroundColor = 'rgb(42, 44, 46)';
      } else {
        nav.style.backgroundColor = 'transparent';
        
      }
    }

 toogle.addEventListener('click',()=>{
  nav.style.backgroundColor = 'rgb(42, 44, 46)';
 })




 


   
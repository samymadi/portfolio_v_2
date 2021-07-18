const options = {
    root : null,
    rootMargin:"0px",
    threshold :[0.1,0],
}

const about = document.querySelector("#about");
const nav = document.querySelector("nav");
const backArrow = document.querySelector(".navigation_back");

function callback (entries){

   if(entries[0].intersectionRatio > .05)  {
       nav.classList.add("nav_scoroll_style"); 
       backArrow.classList.add("navigation_back_animate") ;
       backArrow.classList.remove("navigation_back_animate_hidden");
    }
    else if(entries[0].intersectionRatio <.005) {
        nav.classList.remove("nav_scoroll_style");  
        backArrow.classList.add("navigation_back_animate_hidden");
        setTimeout(()=>{backArrow.classList.remove("navigation_back_animate");},260) 
    }
        
}

const observer = new IntersectionObserver(callback,options);

observer.observe(about);
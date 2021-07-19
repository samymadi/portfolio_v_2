const options = {
    root : null,
    rootMargin:"0px",
    threshold :[0.15],
}

const article = document.querySelector("article");
const nav = document.querySelector("nav");
const backArrow = document.querySelector(".navigation_back");

function callback (entries){

   

    console.log(entries[0].intersectionRatio);
   if(entries[0].intersectionRatio > 0.15)  {
       nav.classList.add("nav_scoroll_style"); 
       backArrow.classList.add("navigation_back_animate") ;
       backArrow.classList.remove("navigation_back_animate_hidden");
    }
    else if(entries[0].intersectionRatio <0.15) {
        nav.classList.remove("nav_scoroll_style");  
        backArrow.classList.add("navigation_back_animate_hidden");
        setTimeout(()=>{backArrow.classList.remove("navigation_back_animate");},260) 
    }
        
}

const observer = new IntersectionObserver(callback,options);

observer.observe(article);
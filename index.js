const closebtn = document.querySelector("#close_menu");
let openMenu = false;



closebtn.addEventListener("click",(e)=>{
    console.log(openMenu)
    if(openMenu)  closebtn.src="./assets/close.png";
              else  closebtn.src="./assets/menu.png"
    openMenu = !openMenu;

}) 
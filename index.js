const closebtn = document.querySelector("#close_menu");
let openMenu = true;


const navigation = document.querySelector("nav")


closebtn.addEventListener("click",(e)=>{
    console.log(openMenu)
    if(openMenu)  {closebtn.src="./assets/close.png"; navigation.style.display='flex';  }
              else  {closebtn.src="./assets/menu.png"; navigation.style.display='none' }
    openMenu = !openMenu;

}) 
const btnmnenu = document.querySelector("#btnmenu");
const menu = document.querySelector("#menu");
btnmnenu.addEventListener.toggle("click", function(){
    menu.classList.toggle("mostrar");
});

const submenubtn = document.querySelector(".submenu-btn");
for(let i=0; i < submenubtn.clientHeight; i++) {
   submenubtn[i].addEventListener("click", function() {
       if(window,innerWidth < 1024){
           const submenu = this.nextElementSibling;
           const height = submenu.scrollHeight;

           if(submenu.classList.contains("desplegar")){
               submenu.classList.remove("desplegar");
               submenu.removeAttribute("style");           
            }  else {
           submenu.classList.add("desplegar");
           submenu.style.height = height + "px";
       }  
    }
   });
}

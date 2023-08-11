let up=document.querySelector(".up")
console.log(up)


window.onscroll=function(){

    // if(this.scrollY >= 1000){
    //     up.classList.add("show")
    // }else{
    //       up.classList.remove("show")
    // }
    this.scrollY >= 1000?  up.classList.add("show") :up.classList.remove("show");

}

up.onclick=function(){
   window.scrollTo({
    top:0,
    behavior:"smooth"
   })
}

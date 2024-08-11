for(var i =0;i<document.querySelectorAll(".drum").length;i++){
  
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        
        var btnin=this.innerHTML;
       makeSound(btnin);
        buttonAnimation(btnin);
    })
}
addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
   
})

function makeSound(key){
    switch(key)
    {
            case "d":
                var a1=new Audio("tom-1.mp3");
                a1.play();
                break;
            case "j":
                var a2=new Audio("tom-2.mp3");
                a2.play();
                break;
            case "k":
                var a3=new Audio("tom-3.mp3");
                a3.play();
                break;
            case "l":
                var a4=new Audio("tom-4.mp3");
                a4.play();
                break;
            case "w":
                var a5=new Audio("crash.mp3");
                a5.play();
                break;
            case "a":
                var a6=new Audio("kick-bass.mp3");
                a6.play();
                break;
            case "s":
                var a7=new Audio("snare.mp3");
                a7.play();
                break;
            
    }
}

function buttonAnimation(ckey){

    var action =document.querySelector("."+ckey);
    action.classList.add("pressed");
    setTimeout(function(){
        action.classList.remove("pressed");
    },100)

}
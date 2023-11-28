var g=document.querySelectorAll("button");
for(var i=0;i<24;i++){
    g[i].addEventListener('click',function(){
        var t=this.innerHTML;
        var tt=t.slice(t.length-1);
         makeSound(tt);
         flashButton(tt);
    })
}
document.addEventListener("keydown",function(event){
    makeSound(event.key);
    flashButton(event.key);
})
function makeSound(key){
    switch(key){
        case "a":
            var key=new Audio("sounds/key01.mp3");
            key.play();
        break;
        case "b":
            var key=new Audio("sounds/key02.mp3");
            key.play();
        break;
        case "c":
            var key=new Audio("sounds/key03.mp3");
            key.play();
        break;
        case "d":
            var key=new Audio("sounds/key04.mp3");
            key.play();
        break;
        case "e":
            var key=new Audio("sounds/key05.mp3");
            key.play();
        break;
        case "f":
            var key=new Audio("sounds/key06.mp3");
            key.play();
        break;
        case "g":
            var key=new Audio("sounds/key07.mp3");
            key.play();
        break;
        case "h":
            var key=new Audio("sounds/key08.mp3");
            key.play();
        break;
        case "i":
            var key=new Audio("sounds/key09.mp3");
            key.play();
        break;
        case "j":
            var key=new Audio("sounds/key10.mp3");
            key.play();
        break;
        case "k":
            var key=new Audio("sounds/key11.mp3");
            key.play();
        break;
        case "l":
            var key=new Audio("sounds/key12.mp3");
            key.play();
        break;
        case "m":
            var key=new Audio("sounds/key13.mp3");
            key.play();
        break;
        case "n":
            var key=new Audio("sounds/key14.mp3");
            key.play();
        break;
        case "o":
            var key=new Audio("sounds/key15.mp3");
            key.play();
        break;
        case "p":
            var key=new Audio("sounds/key16.mp3");
            key.play();
        break;
        case "q":
            var key=new Audio("sounds/key17.mp3");
            key.play();
        break;
        case "r":
            var key=new Audio("sounds/key18.mp3");
            key.play();
        break;
        case "s":
            var key=new Audio("sounds/key19.mp3");
            key.play();
        break;
        case "t":
            var key=new Audio("sounds/key20.mp3");
            key.play();
        break;
        case "u":
            var key=new Audio("sounds/key21.mp3");
            key.play();
        break;
        case "v":
            var key=new Audio("sounds/key22.mp3");
            key.play();
        break;
        case "w":
            var key=new Audio("sounds/key23.mp3");
            key.play();
        break;
        case "x":
            var key=new Audio("sounds/key24.mp3");
            key.play();
        break;

        default:console.log(tt);

     }
}
function flashButton(key){
    var q=document.querySelector("."+key);
    q.classList.add("pressed");
    setTimeout(function(){
        q.classList.remove("pressed");
    },100);
}
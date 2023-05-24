console.log("LETS PLAY A GAME")
let tune=new Audio("music.mp3")
let audioTurn=new Audio("ting.mp3")
let gameover=new Audio("gameover.mp3")
let isgameover=false
let turn = "X"
window.addEventListener('click',()=>
{
    document.getElementById("song").play();
});
//function to change the turn
const changeTurn =()=>
{
    return turn==="X"?"0":"X"
}
//function to check the winner
//need to mention all possible wins in this function
const checkWin=()=>
{
    let boxtext=document.getElementsByClassName('boxtext');
   let wins=[
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
   ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = "congragulations "+boxtext[e[0]].innerText + " ,you won"
            isgameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="250px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
    }
   })
}
//logic for the game
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(isgameover===false)
        {
            if(boxtext.innerText==='')
            {
                audioTurn.play();
               boxtext.innerText=turn;
               turn=changeTurn();
                checkWin();
                if(isgameover===false)
                {
                document.getElementsByClassName("info")[0].innerText="Turn for " +turn;
                }
                else
                {
                    tune.pause();
                    gameover.play();
                }
            }
        } 
           
    }) 
})
//reset button logic
reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=> {
        element.innerText=""
    });
    turn ="X";
    gameover.pause();
    tune.play();
    isgameover=false 
    document.getElementsByClassName("info")[0].innerText="Turn for " +turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0";
    //hodngklngfkpetnetknkptngpktrn


})

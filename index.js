var randomNumber1= Math.floor(Math.random()*6)+1;
var randomdiceimage="dice"+ randomNumber1 +".png";
var img1 =document.querySelectorAll("img")[0];
img1.setAttribute("src", randomdiceimage);
var randomNumber2= Math.floor(Math.random()*6)+1;
var randomdiceimage2="dice"+ randomNumber2 +".png";
var img2 =document.querySelectorAll("img")[1];
img2.setAttribute("src", randomdiceimage2);
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins!";
    console.log("🤩");
}
else if (randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 wins!";
    console.log("🤩");
}
else{
    document.querySelector("h1").innerHTML="Draw!";
    console.log("🤜🤛");
}

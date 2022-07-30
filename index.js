var randomNumber1= Math.floor(Math.random()*6) + 1
var imageSource1= "images/dice" + randomNumber1 + ".png"
document.getElementsByClassName('img1')[0].setAttribute("src",imageSource1)


var randomNumber2= Math.floor(Math.random()*6) + 1

var imageSource2= "images/dice" + randomNumber2 + ".png"
document.getElementsByClassName('img2')[0].setAttribute("src",imageSource2)

if(randomNumber1 > randomNumber2){
  document.getElementsByTagName("h1")[0].innerHTML="player one wins"
}else if (randomNumber1 < randomNumber2){
  document.querySelector('h1'). innerHTML=" player two wins"
}else{
  document.querySelector('h1').innerHTML="Draw"
}
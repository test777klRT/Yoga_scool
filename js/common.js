//$('body').hide()
function imgSlider(anything){
 document.querySelector('.img-content').src = anything;
}

function changeColor(color){
 document.querySelector(':root').style.setProperty('--mainBlue', color);
}

function changeText(num){
 if (num === 1)
 document.getElementById('simple').innerHTML = "Not just food,<br> it's your <span>love</span> for yourself";
 if (num === 2)
 document.getElementById('simple').innerHTML = "Not just practice,<br> it's a <span>lifestyle</span>";
 if (num === 3)
 document.getElementById('simple').innerHTML = "Not just meditation,<br> it's your <span>harmony</span> with yourself";
}
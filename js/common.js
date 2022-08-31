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



MicroModal.init({
 onShow: modal => console.info(`${modal.id} is shown`), // [1]
 onClose: modal => console.info(`${modal.id} is hidden`), // [2]
 openTrigger: 'data-custom-open', // [3]
 closeTrigger: 'data-custom-close', // [4]
 openClass: 'is-open', // [5]
 disableScroll: true, // [6]
 disableFocus: false, // [7]
 awaitOpenAnimation: false, // [8]
 awaitCloseAnimation: false, // [9]
 debugMode: true // [10]
});

document.getElementById('dataToday').valueAsDate= new Date();
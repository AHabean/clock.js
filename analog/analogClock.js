const hourHand = document.querySelector('#hour');
const minuteHand = document.querySelector('#minute');
const secondHand = document.querySelector('#second');

//Set time

setInterval(setAnalogClock, 1000);

function setAnalogClock() {
    const analogTime = new Date();   

    //Divide sec /60 because in a minute are 60 sec => to know how many times we have to rotate the hand sec
    const analogSecondRotatio = analogTime.getSeconds() / 60;
    const analogMinuteRotatio = (analogSecondRotatio + analogTime.getMinutes()) / 60;
    const analogHourRotatio = (analogMinuteRotatio + analogTime.getHours()) / 12;

    //console.log(analogHourRotatio)

    setRotation(secondHand, analogSecondRotatio);
    setRotation(minuteHand, analogMinuteRotatio);
    setRotation(hourHand, analogHourRotatio);

};

//set the deg rotation
function setRotation (el, rotationRatio) {
    el.style.setProperty('--rotation', rotationRatio * 360) //bc our clock rotates 360 deg
};

setAnalogClock();

//Setting goBack button
 const goHomePage = document.querySelector('#nav');
 goHomePage.addEventListener('click', function() {
     window.location.assign('/index.html');
 });














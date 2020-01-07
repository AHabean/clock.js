const clockDisp = document.getElementById('clock');
const messageDisp = document.getElementById('message');


/**Get the current time */
getTime = () => {

    let meridian = 'AM';
    let fullDate = new Date();
    //console.log(fullDate)
    let hours = fullDate.getHours();
    let min = fullDate.getMinutes();
    let sec = fullDate.getSeconds();
 
    //Set the hour/min and sec if minutes and seconds are < 10
    if (hours < 10) {
        hours = '0' + hours;
    };

    if (min < 10) {
        min = '0' + min;
    };

    if (sec < 10) {
        sec = '0' + sec;
    };

    //Set the AM and PM

    if((hours >= 0 || hours <= 24) && hours < 12) {
        meridian = 'AM';
    } else if (hours === 12 && min == 00 && sec == 00) {
        meridian = '';
    } else if (hours >= 12 && hours < 18) {
        meridian = 'PM';
    } else if (hours >= 18 && hours <= 24) {
        meridian = 'PM';
        
    }
    
    //set the current time 
    let currentTime = `${hours}:${min}:${sec} ${meridian}!`;  

    //console.log(currentTime);
    return currentTime;
};

displayBackground = () => { 
    let message;
    let img;
    let time = new Date().getHours(); 

    if((time >= 0 || time <= 24) && time < 12) {
        message = `Good Morning`;
        img = "url('/img/morning.jpeg')";
    } else if (time === 12 && min == 00 && sec == 00) {
        message = `It's noon day`;
        img = "url('/img/noonday.jpeg')";
    } else if (time >= 12 && time < 18) {
        message = `Good afternoon`;
        img = "url('/img/afternoon.jpeg')";
    } else if (time >= 18 && time <= 24) {
        message = `Good evening`;
        img = "url('/img/evening.jpeg')";        
    };

        //set the background
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundImage = `${img}`;

        //display the message and the user Input to UI 

        //1) Get the data from the local storage
        const userInput = localStorage.getItem("inputFromUser"); 

        //2) Dispay data to the UI        
        if( userInput === 'null'|| userInput === null || userInput ==="") {
            //console.log(`${userInput} is null`);            
            messageDisp.innerHTML= `${message}!`; 

        } else if (userInput != null) {
            //console.log(`${userInput} is NOT null`)
            messageDisp.innerHTML = `${message}, ${userInput}!`; 
        }
}

displayBackground();

/**Display the current time to UI */

displayTimeUI = () => {
    clockDisp.innerText = getTime();
};

displayTimeUI();

 //Update the UI each second = trebuie sa update ui la fiecare secunda
 //1000 milisecunde;

 const oneSecond = 1000 
 setInterval(displayTimeUI, oneSecond);

 //Go Back to Home Page Button!

 goBack = () => {
     let urlPage = '/index.html';
     window.location.href = urlPage;
 };
 















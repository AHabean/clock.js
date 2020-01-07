userName = () => {
    let btnID = document.querySelector("#btnID");
    btnID.addEventListener('click', function() {
        let userInput = window.prompt(`Please enter your name to have more fun!`, `buddy :-)`);
        //console.log('You hitted the prompt ok button');
        localStorage.setItem("inputFromUser", userInput);
        window.document.location = "./digital/digital.html"
    })
};


navToAnalogClock = () => {
    let navbtn = document.querySelector("#nav");
    navbtn.addEventListener('click', function() {
        window.location.assign("/analog/analog.html");
    })
};

//functia userName si navToAnalogClock  o sa fie chemata abia dupa ce continutul paginii a fost uploaded
document.addEventListener('DOMContentLoaded', function(){
    //console.log('You hitted the prompt ok button')
    userName();
    navToAnalogClock();
 });





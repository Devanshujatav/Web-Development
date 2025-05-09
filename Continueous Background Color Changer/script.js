// Function => randomColor is used to generate random color through hex values
const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';

    for(let i=0 ; i<6 ; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }

    return color;
};


let intervalId;

const startChangingColor = function(){
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }

    if(!intervalId){
        intervalId = setInterval(changeBgColor,1000);
    }
}


const endChangingColor = function(){
    clearInterval(intervalId);
    intervalId = [];
}


document.querySelector('#start').addEventListener('click' , startChangingColor);

document.querySelector('#stop').addEventListener('click' , endChangingColor);
const clock = document.getElementById('clock');


// setInterval is used to set the interval through which code is executed again and again.
// OR
// The setInterval() function in JavaScript is used to execute a specified function repeatedly at a fixed time interval.
// Parameters : function() , (time => always in millisecond)
setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
} , 1000);
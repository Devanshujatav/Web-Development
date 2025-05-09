const form = document.querySelector('form');

form.addEventListener('submit' , function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');


    // Corner Cases
    if (height === '' || height<0 || isNaN(height)){
        result.innerHTML= `${height}This values of height is not valid`;
    }else if (weight === '' || weight<0 || isNaN(weight)){
        result.innerHTML = `${weight} This value of weight is not valid`;
    }else{
        // Here BMI was calculated
        const BMI = (weight / ((height*height)/1000)).toFixed(2);
        // result.innerHTML = `<span>${BMI}</span>`


        // Category section 
        let category = '';
    
        if (BMI <18.6){
            category = 'Under Weight';
        }else if(BMI > 18.6 && BMI < 24.9 ){
            category = 'Normal Range';
        }else{
            category = 'Over Weight';
        }
    
        // Here BMI and its category is print
        result.innerHTML = `<span>BMI : <strong>${BMI}</strong></span>
        <p>Category : <strong>${category}</strong></p>`;
    }
})
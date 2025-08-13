const codeInputs = document.querySelectorAll('.code');
const codeArray = Array.from(codeInputs);

codeArray.forEach((input, index) => {
   
    input.addEventListener('keydown', function(event) {
        const key = event.key;
        
   
        if (key === 'Backspace') {
            
            if (input.value !== '') {
                input.value = '';
            } 
           
            else if (index > 0) {
                codeArray[index - 1].focus();
                codeArray[index - 1].value = '';
            }
            return;
        }
        
        if (!/^[0-9]$/.test(key)) {
            event.preventDefault();
            return;
        }
    });


    input.addEventListener('input', function(event) {
        const value = event.target.value;
        
    
        if (!/^[0-9]$/.test(value)) {
            input.value = '';
            return;
        }
        
       
        if (value && index < codeArray.length - 1) {
            codeArray[index + 1].focus();
        }
    });
});


window.addEventListener('load', function() {
    if (codeArray.length > 0) {
        codeArray[0].focus();
    }
});
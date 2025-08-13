//your JS code here. If required.


const codeInputs = document.querySelectorAll('.code')

const codeArray = Array.from(codeInputs);

codeArray.forEach((input, index)=> {
    input.addEventListener('keydown', function(event) {
                const key = event.key;
                
                // Handle backspace
                if (key === 'Backspace') {
                    // If current field has content, clear it
                    if (input.value !== '') {
                        input.value = '';
                    } 
                    // If current field is empty and not the first field, move to previous
                    else if (index > 0) {
                        codeArray[index - 1].focus();
                        codeArray[index - 1].value = '';
                    }
                    return;
                }
                
                // Handle delete key
                if (key === 'Delete') {
                    input.value = '';
                    return;
                }
                
                // Only allow numeric input
                if (!/^[0-9]$/.test(key)) {
                    event.preventDefault();
                    return;
                }
            });


            input.addEventListener('input', function(event){
                const value = event.target.value;

                if(!/^[0-9]$/.test(value)){
                    input.value = '';
                    return;
                }

                if(value && index < codeArray.length - 1){
                    codeArray[index + 1].focus();
                }
            })

});
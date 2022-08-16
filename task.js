
var formElement = document.forms['formElement'];

for (let i = 0; i < formElement.elements.length; i++) {
    
    formElement.elements[i].onfocus = function(evt) {
        var activeElement = formElement.querySelector('.focused');
        if (activeElement) {
            console.log("activeElement: " + activeElement);
            activeElement.classList.remove('focused');
        }
        evt.target.classList.add('focused');
    };
    
    formElement.elements[i].onblur = function(evt) {
         	var activeElement = formElement.querySelector('.focused');
             if (activeElement) {
              	activeElement.classList.remove('focused');   
             }
         };

  }
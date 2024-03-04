 //Header Change
 const formHeading = document.querySelector(".form-heading");
 const formInputs = document.querySelectorAll(".contact-form-input");
 
 
 
 formInputs.forEach((input) => {
     input.addEventListener("focus", () => {
         formHeading.style.opacity = "0";
         setTimeout(() => {
             formHeading.textContent = ` ${input.
                 placeholder}`;
             formHeading.style.opacity = "1";
         }, 350);
     });
 });
 
 
 
 
 //Form Validation
 document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector('.contact-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        if (validateForm()) {
            alert('Form submitted successfully!');
        }
    });

    function validateForm() {
        var nameInput = document.getElementById('nameInput');
        var emailInput = document.getElementById('emailInput');
        var subjectInput = document.getElementById('subjectInput');
        var messageInput = document.getElementById('messageInput');

        clearErrorMessages();

        if (nameInput.value.trim() === '') {
            displayErrorMessage(nameInput, 'Please enter your name.');
            return false;
        }

        if (emailInput.value.trim() === '') {
            displayErrorMessage(emailInput, 'Please enter your email.');
            return false;
        } else if (!isValidEmail(emailInput.value)) {
            displayErrorMessage(emailInput, 'Please enter a valid email address.');
            return false;
        }

        if (subjectInput.value.trim() === '') {
            displayErrorMessage(subjectInput, 'Please enter the subject.');
            return false;
        }

        if (messageInput.value.trim() === '') {
            displayErrorMessage(messageInput, 'Please enter your message.');
            return false;
        }

        // Return true if everything passed
        return true;
    }
        //Regex to search for invalid email addresses
    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function displayErrorMessage(inputElement, message) {
        var errorMessageElement = document.createElement('div');
        errorMessageElement.className = 'error-message';
        errorMessageElement.textContent = message;

        var parentElement = inputElement.parentNode;
        parentElement.appendChild(errorMessageElement);
    }

    function clearErrorMessages() {
        var errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(function (errorMessage) {
            errorMessage.parentNode.removeChild(errorMessage);
        });
    }
});

 
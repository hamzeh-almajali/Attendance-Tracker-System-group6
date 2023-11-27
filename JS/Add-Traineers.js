
    function createAccount(event) {
        event.preventDefault();

        var fullName = document.getElementById('fullname').value.trim();
        var email = document.getElementById('email').value.trim();
        var password = document.getElementById('password').value.trim();

        var alertMessage = document.getElementById('alert');
        var isValid = true;

        // Basic email validation using regex
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!fullName || !email || !password) {
            isValid = false;
            alertContent = "All fields are required";
        } else if (!emailRegex.test(email)) {
            isValid = false;
            alertContent = "Invalid email address";
        } else {
            // Check if the email already exists in localStorage
            if (isEmailExists(email)) {
                isValid = false;
                // alertContent = "Email already exists. Please choose a different email.";
                // alert('asdf');
            } else {
    // Save the user information to localStorage
    saveUserToLocalStorage(email, password);
    // alertContent = "Account created successfully!";
        //  window.location.replace('loginPage.html');
         alert('Traineenes added successfully');
         window.location.replace('Add-Traineers.html');

    // Correct way to attach an event listener
    // var sub = document.getElementById('sub');
    // sub.addEventListener('click', function() {
    //     window.location.replace('loginPage.html');
    // });}
            }
        }

        if (!isValid) {
            alertMessage.innerHTML = alertContent;
        }
    }

    function isEmailExists(email) {
        return localStorage.getItem(email) !== null;
    }

    function saveUserToLocalStorage(email, password) {
        localStorage.setItem(email, password);
        
    }

const form = document.querySelector("form"),
   emailField = form.querySelector(".email-field"),
   emailInput = emailField.querySelector(".email"),
   passField = form.querySelector(".create-password"),
   passInput = passField.querySelector(".password"),
   cPassField = form.querySelector(".confirm-password"),
   cPassInput = cPassField.querySelector(".cPassword");

// Email Validation

function checkEmail(){
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!emailInput.value.match(emailPattern)) {
        return emailField.classList.add("invalid");    // adding invalid class if email value do not match
    }
    emailField.classList.remove("invalid");     // removing invalid class if emaail value matched with emailPattern 
                                                

  }

    // Hide and Show password
    const  eyeIcons = document.querySelectorAll('.show-hide');   // getting parent element of eye icon and selecting the password input

    eyeIcons.forEach((eyeIcon) => {
      eyeIcon.addEventListener("click", () => {
        const pInput = eyeIcon.parentElement.querySelector("input");
        // console.log(pInput)
        if(pInput.type === "password"){
          eyeIcon.classList.replace("bx-hide", "bx-show")
          return(pInput.type) = "text"
        }
        eyeIcon.classList.replace("bx-show", "bx-hide")
          pInput.type = "password"
      });
    })

    // Password validation
    function createPass() {
      const passPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

      if (!passInput.value.match(passPattern)) {
        return passField.classList.add("invalid");        //adding invalid class if password input value do not match password
      }

        passField.classList.remove("invalid");            //removing invalid class if password input value do not match password
    }


    //Confirm password validation

    function confirmPass(){
      if (passInput.value !== cPassInput.value || cPassInput.value === ""){
       return cPassField.classList.add("invalid");
      }
       cPassField.classList.remove("invalid");
    }


    // Calling Function on form submit
    form.addEventListener('submit', (e) => {
        e.preventDefault();    //preventing form submiting
        checkEmail();
        createPass();
        confirmPass();


      
      // Calling function on key up
      emailInput.addEventListener('keyup', checkEmail);
      passInput.addEventListener('keyup', createPass);
      passInput.addEventListener('keyup', confirmPass);
    

    if (
       !emailField.classList.contains ("invalid") &&
       !passField.classList.contains ("invalid") &&
       !cpassField.classList.contains ("invalid") 
    ){
      // location.href = form.getAttribute("action")
    }
});



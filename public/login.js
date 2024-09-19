 document.addEventListener('DOMContentLoaded', () => {
  function validateloginsInputs(){
    const loginButton = document.getElementById("loginButton");
      const createOne = document.getElementById("createOne");
      loginButton.addEventListener("click", (event) => {
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        let usernameError =  document.getElementById("usernameError");
        let passwordError = document.getElementById("passwordError");
        if (username === "") {
          usernameError.innerHTML ="Invalid username";
          setTimeout(() => {
            usernameError.innerHTML ="";
          }, 2000);
          event.preventDefault();
        } else if (password === "") {
          passwordError.innerHTML ="Invalid password";
          setTimeout(() => {
            passwordError.innerHTML ="";
          }, 2000);
          event.preventDefault();
        } else {
          //go where needed
        }
      });
      createOne.addEventListener("click", (event) => {
        // Hide the login form
        document.getElementById("loginForm").style.display = "none";
        // Show the create account form
        document.getElementById("createAccountForm").style.display = "block";
      });
    }
    validateloginsInputs();

    function validateAccount(){
    document.getElementById("createAccount").addEventListener("click", (event) => {
        let newUsername = document.getElementById("newUsername").value;
        let newEmail = document.getElementById("newEmail").value;
        let newPassword = document.getElementById("newPassword").value;
        let newUsernameError = document.getElementById("newUsernameError");
        let newEmailError = document.getElementById("newEmailError");
        let newPasswordError = document.getElementById("newPasswordError");
        if (newUsername === ""|| newUsername.length < 4) {
            newUsernameError.innerHTML ="Invalid username";
            setTimeout(() => {
                newUsernameError.innerHTML ="";
          }, 2000);
          event.preventDefault();
        } else if (newPassword === ""|| newPassword.length < 6) {
            newPasswordError.innerHTML ="Invalid password";
            setTimeout(() => {
                newPasswordError.innerHTML ="";
          }, 2000);
          event.preventDefault();
        }else if (newEmail === "" || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(newEmail)){
          newEmailError.innerHTML ="Invalid Email";
          setTimeout(() => {
              newEmailError.innerHTML ="";
        }, 2000);
        event.preventDefault();
      } else {
          document
            .getElementById("createAccountForm")
            .querySelector('input[name="formType"]').value = "createAccount";
          // Submit the form
          document.getElementById("createAccountForm").submit();
          }
      });
    }
    validateAccount();
    });
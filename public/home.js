document.addEventListener("DOMContentLoaded", () => {
  function validateEmail(){
document.getElementById('submit').addEventListener('click', (event) => {
  let email = document.getElementById("email").value;
  let info = document.getElementById("info");
  if (email === '' || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    info.innerHTML = 'Enter a valid email';
    setTimeout(() => {
      info.innerHTML = '';
    }, 3000);
    event.preventDefault();
  } else {
    info.innerHTML = 'Email received successfully!';
    setTimeout(() => {
      info.innerHTML = '';
    }, 3000);
    document.getElementById("mailingAccount").submit();
  }
});
  }
  validateEmail();
});
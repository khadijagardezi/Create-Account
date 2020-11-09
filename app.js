const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    
    
    checkInputs();
});
function checkInputs() {
    // getting values from inputs
    const userValue =username.value;
    const emailValue= email.value;
    const passValue = password.value;
    const passValue2 = password2.value;
  if(userValue === '') {
      //error
      // error classList
      setErrorFor(username, "Enter your Name");

  }else {
      //add success class
      setSuccessFor(username);
  }
  function setErrorFor(input, message) {
  const formControl = input.parentElement; // .form-control
  const small = formControl.querySelector('small');
  
  // error msg
  small.innerText = message;

  // add error icon
  formControl.className = 'form-control error';
  

  }
  function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
  }
	if(emailValue === '') {
		setErrorFor(email, 'Enter your email');
	} else {
		setSuccessFor(email);
  }
  
  if(passValue === '') {
		setErrorFor(password, 'Enter your password');
	} else {
		setSuccessFor(password);
  }
  if(passValue2 === '') {
		setErrorFor(password2, 'Enter password Again');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}
}

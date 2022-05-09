const signUpButton = document.getElementById('signUp');  
const signInButton = document.getElementById('signIn');  
const container = document.getElementById('container');
const loginBtn = document.querySelector('.login-trigger');
const login = document.getElementById('login');
const closeBtn = document.querySelector('.close');

login.style.display = 'none';

loginBtn.addEventListener('click' , () => {
    login.style.display = 'block';
    loginBtn.style.display = 'none';
})

signUpButton.addEventListener('click', () => {  
    container.classList.add("right-panel-active");  
});  
signInButton.addEventListener('click', () => {  
    container.classList.remove("right-panel-active");  
});  
closeBtn.addEventListener('click', () => {
    login.style.display = 'none';
    loginBtn.style.display = 'block';
})
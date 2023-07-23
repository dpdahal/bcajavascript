
document.getElementById('newRecord').addEventListener('submit',function(event){
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let password = document.getElementById('password').value;

    let nameError = document.getElementById('nameError');
    let emailError = document.getElementById('emailError');
    let phoneError = document.getElementById('phoneError');
    let passwordError = document.getElementById('passwordError');

    if(name == ''){
        nameError.innerHTML = 'Name is required';
    }else if(!name.match(/^[a-zA-Z]+$/)){
        nameError.innerHTML = 'Name must be a string';
    }else if (name.length < 3){
        nameError.innerHTML = 'Name must be at least 2 characters';
    }     
    else{
        nameError.innerHTML = '';
    }

    if(email == ''){
        emailError.innerHTML = 'Email is required';
    }else if(!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)){
        emailError.innerHTML = 'Email is invalid';
    }else{
        emailError.innerHTML = '';
    }

    //  (/^[0-9]{4}$/)

    if(phone == ''){
        phoneError.innerHTML = 'Phone is required';
    }else if(!phone.match(/^[0-9]+$/)){
        phoneError.innerHTML = 'Phone must be a number';
    }else if(phone.length < 10){
        phoneError.innerHTML = 'Phone must be at least 10 characters';
    }else{
        phoneError.innerHTML = '';
    }

    if(password == ''){
        passwordError.innerHTML = 'Password is required';
    }
    else if(!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)){
        passwordError.innerHTML = 'Password must be at least 8 characters at least 1 uppercase letter, 1 lowercase letter, and 1 number';
    }else{
        passwordError.innerHTML = '';
    }

});
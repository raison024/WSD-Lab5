function loadAnimations(){
    let nav = document.getElementById('nav');
    nav.style.transform = "translateY(0%)";
    nav.style.opacity = "100%"
    let form = document.getElementById('form');
    form.style.transform = "translateY(0%)";
    form.style.opacity = "100%"
    let footer = document.getElementById('footer');
    footer.style.transform = "translateY(0%)";
    footer.style.opacity = "100%"
}

function nameValidate(){
    let name = document.getElementById('name').value;
    let nameResp = document.getElementById('nameResp');
    //Name Validation
    let nameReg = /^([a-zA-Z]){5,25}$/;
    let nameValid = nameReg.test(name);
    if(name.length === 0){
        nameResp.classList.remove("text-success");
        nameResp.classList.add("text-danger");
        nameResp.innerText = "Enter a username!"
    }
    else if(!nameValid){
        nameResp.classList.remove("text-success");
        nameResp.classList.add("text-danger");
        nameResp.innerText = "Username is invalid!"
    }
    else{
        nameResp.classList.remove("text-danger");
        nameResp.classList.add("text-success");
        nameResp.innerText = "Username is valid";
    }

    let blockReg = /^[0-9]$/;
    if(blockReg.test(name)){
        event.preventDefault();
        return false;
    }
}

function phoneValidation(){
    let phone = document.getElementById('phone').value;
    let phoneResp = document.getElementById('phoneResp');
    let phoneReg = /^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$/;
    let phoneValid = phoneReg.test(phone);
    if(phone.length === 0){
        phoneResp.classList.remove("text-success");
        phoneResp.classList.add("text-danger");
        phoneResp.innerText = "Enter a phone number!"
    }
    else if(!phoneValid){
        phoneResp.classList.remove("text-success");
        phoneResp.classList.add("text-danger");
        phoneResp.innerText = "Phone Number is invalid!"
    }
    else{
        phoneResp.classList.remove("text-danger");
        phoneResp.classList.add("text-success");
        phoneResp.innerText = "Phone Number is valid";
    }
}


function validateForm() {

    //Input Fields
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let password = document.getElementById('password').value;
    let email = document.getElementById('email').value;
    let age = document.getElementById('age').value;

    //Response Spans
    let nameResp = document.getElementById('nameResp');
    let phoneResp = document.getElementById('phoneResp');
    let passResp = document.getElementById('passResp');
    let emailResp = document.getElementById('emailResp');
    let ageResp = document.getElementById('ageResp');

    //Name Validation
    let nameReg = /^([a-zA-Z]){5,25}$/;
    let nameValid = nameReg.test(name);
    if(name.length === 0){
        nameResp.classList.remove("text-success");
        nameResp.classList.add("text-danger");
        nameResp.innerText = "Enter a username!"
    }
    else if(!nameValid){
        nameResp.classList.remove("text-success");
        nameResp.classList.add("text-danger");
        nameResp.innerText = "Username is invalid!"
    }
    else{
        nameResp.classList.remove("text-danger");
        nameResp.classList.add("text-success");
        nameResp.innerText = "Username is valid";
    }

    //Phone Validation
    let phoneReg = /^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$/;
    let phoneValid = phoneReg.test(phone);
    if(phone.length === 0){
        phoneResp.classList.remove("text-success");
        phoneResp.classList.add("text-danger");
        phoneResp.innerText = "Enter a phone number!"
    }
    else if(!phoneValid){
        phoneResp.classList.remove("text-success");
        phoneResp.classList.add("text-danger");
        phoneResp.innerText = "Phone Number is invalid!"
    }
    else{
        phoneResp.classList.remove("text-danger");
        phoneResp.classList.add("text-success");
        phoneResp.innerText = "Phone Number is valid";
    }

    //Password Validation
    let passReg = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}\[\]:;<>,.?\/~_+-=|]).{8,32}$/;
    let passValid = passReg.test(password);
    if(password.length === 0){
        passResp.classList.remove("text-success");
        passResp.classList.add("text-danger");
        passResp.innerText = "Enter a Password!"
    }
    else if(!passValid){
        passResp.classList.remove("text-success");
        passResp.classList.add("text-danger");
        passResp.innerText = "Password is invalid!"
    }
    else{
        passResp.classList.remove("text-danger");
        passResp.classList.add("text-success");
        passResp.innerText = "Password is valid";
    }

    //Email Validation
    let emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let emailValid = emailReg.test(email);
    if(email.length === 0){
        emailResp.classList.remove("text-success");
        emailResp.classList.add("text-danger");
        emailResp.innerText = "Enter a Email!"
    }
    else if(!emailValid){
        emailResp.classList.remove("text-success");
        emailResp.classList.add("text-danger");
        emailResp.innerText = "Email is invalid!"
    }
    else{
        emailResp.classList.remove("text-danger");
        emailResp.classList.add("text-success");
        emailResp.innerText = "Email is valid";
    }

    //Confirm Password Validation
    let con = document.getElementById('conpass');
    let conresp = document.getElementById('conResp');

    if(con.value.length === 0){
        conresp.classList.remove("text-success");
        conresp.classList.add("text-danger");
        conresp.innerText = "Repeat Password Here!"
    }

    if(con.value !== password){
        conresp.classList.remove("text-success");
        conresp.classList.remove("text-warning");
        conresp.classList.add("text-danger");
        conresp.innerText = "Password doesn't match!";
    }
    else{
        conresp.classList.remove("text-danger");
        conresp.classList.remove("text-warning");
        conresp.classList.add("text-success");
        conresp.innerText = "Password Match!";
    }

    if(password.length === 0){
        conresp.classList.remove("text-danger");
        conresp.classList.remove("text-success");
        conresp.classList.add("text-warning");
        conresp.innerText = "Enter the password first!";
    }

    //Age Validation
    let ageReg = /^(1[89]|[2-9]\d)$/;
    let ageValid = ageReg.test(age);
    if(age.length === 0){
        ageResp.classList.remove("text-success");
        ageResp.classList.add("text-danger");
        ageResp.innerText = "Enter your age!"
    }
    else if(!ageValid){
        ageResp.classList.remove("text-success");
        ageResp.classList.add("text-danger");
        ageResp.innerText = "Age is invalid!"
    }
    else{
        ageResp.classList.remove("text-danger");
        ageResp.classList.add("text-success");
        ageResp.innerText = "Age is valid";
    }

}

function checkPass(){
    let password = document.getElementById('password').value;
    let passResp = document.getElementById('passResp');
    let passReg = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}\[\]:;<>,.?\/~_+-=|]).{8,32}$/;
    let passValid = passReg.test(password);
    if(password.length === 0){
        passResp.classList.remove("text-success");
        passResp.classList.add("text-danger");
        passResp.innerText = "Enter a Password!"
    }
    else if(!passValid){
        passResp.classList.remove("text-success");
        passResp.classList.add("text-danger");
        passResp.innerText = "Password is invalid!"
    }
    else{
        passResp.classList.remove("text-danger");
        passResp.classList.add("text-success");
        passResp.innerText = "Password is valid";
    }
}

function ageCheck(){
    let age = document.getElementById('age').value;
    let ageResp = document.getElementById('ageResp');
    let ageReg = /^(1[89]|[2-9]\d)$/;
    let ageValid = ageReg.test(age);
    if(age.length === 0){
        ageResp.classList.remove("text-success");
        ageResp.classList.add("text-danger");
        ageResp.innerText = "Enter your age!"
    }
    else if(!ageValid){
        ageResp.classList.remove("text-success");
        ageResp.classList.add("text-danger");
        ageResp.innerText = "Age is invalid!"
    }
    else{
        ageResp.classList.remove("text-danger");
        ageResp.classList.add("text-success");
        ageResp.innerText = "Age is valid";
    }
}

function showPass(){
    let password = document.getElementById('password');
    let icon = document.getElementById('showPassIcon');

    if(password.type === "password"){
        password.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    }
    else{
        password.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}

function showConPass(){
    let password = document.getElementById('conpass');
    let icon = document.getElementById('showConPassIcon');

    if(password.type === "password"){
        password.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    }
    else{
        password.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }

}

function confirmPassword(){
    let con = document.getElementById('conpass').value;
    let conresp = document.getElementById('conResp');
    let password = document.getElementById('password').value;

    if(con.length === 0){
        conresp.classList.remove("text-success");
        conresp.classList.remove("text-warning");
        conresp.classList.add("text-danger");
        conresp.innerText = "Repeat Password Here!"
    }

    if(con !== password){
        conresp.classList.remove("text-success");
        conresp.classList.remove("text-warning");
        conresp.classList.add("text-danger");
        conresp.innerText = "Password doesn't match!";
    }
    else{
        conresp.classList.remove("text-danger");
        conresp.classList.remove("text-warning");
        conresp.classList.add("text-success");
        conresp.innerText = "Password Match!";
    }

    if(password.length === 0){
        conresp.classList.remove("text-danger");
        conresp.classList.remove("text-success");
        conresp.classList.add("text-warning");
        conresp.innerText = "Enter the password first!";
    }
}

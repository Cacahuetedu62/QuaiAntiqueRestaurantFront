const EmailInput = document.getElementById("EmailInput");
const PasswordInput = document.getElementById("PasswordInput");
const btnSignin = document.getElementById("btnSignin");

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials(){ 


if(EmailInput.value == "test@mail.com" && PasswordInput == "123"){
alert("enfin ca fonctionne !!!");
window.location.replace("/");
}

else{
    EmailInput.classList.add("is-invalid");
    PasswordInput.classList.add("is-invalid");
}
    }


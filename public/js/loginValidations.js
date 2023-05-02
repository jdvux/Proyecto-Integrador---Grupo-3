window.addEventListener('load', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', e => {

        let errorsArray = [];

        let emailField = document.querySelector('.email-field');
        const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(emailField.value == ''){
            errorsArray.push('El campo de email tiene que estar completo');
        }
        if (!emailRegEx.test(emailField.value) && emailField.value > 0) {
            errorsArray.push('El correo electrónico no es válido');
        }


        let passwordField = document.querySelector('.password-field');
        if(passwordField.value == ''){
            errorsArray.push('El campo de contraseña tiene que estar completo');
        }


        if(errorsArray.length > 0){
            e.preventDefault();

            let ulErrors = document.querySelector('div.errors ul')
            for(let i=0; i < errorsArray.length; i++){
                ulErrors.innerHTML += "<li>" + errorsArray[i] + "</li> <br>"
            }
            ulErrors.style.color = "#f3f1f1";
            ulErrors.style.fontSize = "smaller";
            ulErrors.style.width = "80%";
            ulErrors.style.margin = "-4% auto 3%"; 
        }
    })
})
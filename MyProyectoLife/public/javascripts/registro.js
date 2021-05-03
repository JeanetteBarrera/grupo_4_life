let qs = function(elemento){
    return document.querySelector(elemento)
}

window.addEventListener('load', () => {
    console.log('Vinculado')

    let $inputName = qs('#name'),
    $nameErrors = qs('#nameErrors'),
    $inputSurname = qs('#surname'),
    $surnameErrors = qs('#surnameErrors'),
    $form = qs('#form'),
    $email = qs('#email'),
    $emailErrors = qs('#emailErrors'),
    $password = qs('#password'),
    $passwordErrors = qs('#passwordErrors'),
    $password2 = qs('#confirmarPassword'),
    $password2Errors = qs('#confirmarPasswordErrors'),
    $emaillog = qs('#emailLog'),
    $emailErrorsLog = qs('#emailErrorsLog'),
    $passwordLog = qs('#password'),
    $passwordErrorsLog = qs('#passwordErrorsLog'),
    
    $terms = qs('#flexCheckDefault'),
    $termsErrors = qs('#termsErrors'),
    regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;

    //VALIDACION LOGIN//

   $email.addEventListener('blur', function() {
    switch (true) {
        case !$email.value.trim():
            $emailErrors.innerHTML = 'The email field is required';
            $email.classList.add('is-invalid')
            break;
        case !regExEmail.test($email.value):
            $emailErrors.innerHTML = 'Invalid email';
            $email.classList.add('is-invalid')
            break
        default:
            $email.classList.remove('is-invalid');
            $email.classList.add('is-valid');
            $emailErrors.innerHTML = ''
            break;
     }
    })


  $password.addEventListener('blur', function() {
    switch (true) {
        case !$password.value.trim():
            $passwordErrors.innerHTML = 'The password field is required';
            $passwordLog.classList.add('is-invalid')
            break;
        case $password.value != $password.value:
                passw$password2Errors.innerHTML = 'Invalid password';
                $password2.classList.add('is-invalid')
                break;
        
        default:
            $passwordwordLog.classList.remove('is-invalid');
            $passwordwordLog.classList.add('is-valid');
            $passwordErrorsLog.innerHTML = ''
            break;
        }
    })

    //VALIDACION DE REGISTRO//
    $inputName.addEventListener('blur', function(){
        console.log($inputName.value.trim())
        switch (true) {
            case !$inputName.value.trim():
                $nameErrors.innerHTML = 'The name field is required'
                $inputName.classList.add('is-invalid')
                break;
            case !regExAlpha.test($inputName.value):
                $nameErrors.innerHTML = 'The name valid is required'
                $inputName.classList.add('is-invalid')  
                break; 
            default:
                $inputName.classList.remove('is-invalid');
                $inputName.classList.add('is-valid');
                $nameErrors.innerHTML = ''
                break;
        }
    })

    $inputSurname.addEventListener('blur', function(){
        console.log($inputSurname.value.trim())
        switch (true) {
            case !$inputSurname.value.trim():
                $surnameErrors.innerHTML = 'The Last Name field is required'
                $inputSurname.classList.add('is-invalid')
                break;
            case !regExAlpha.test($inputSurname.value):
                $surnameErrors.innerHTML = 'The Last Name valid is required'
                $inputSurname.classList.add('is-invalid')  
                break; 
            default:
                $inputSurname.classList.remove('is-invalid');
                $inputSurname.classList.add('is-valid');
                $surnameErrors.innerHTML = ''
                break;
        }
    })


    $email.addEventListener('blur', function() {
        switch (true) {
            case !$email.value.trim():
                $emailErrors.innerHTML = 'The email field is required';
                $email.classList.add('is-invalid')
                break;
            case !regExEmail.test($email.value):
                $emailErrors.innerHTML = 'The email valid is required';
                $email.classList.add('is-invalid')
                break
            default:
                $email.classList.remove('is-invalid');
                $email.classList.add('is-valid');
                $emailErrors.innerHTML = ''
                break;
        }
    })

    $password.addEventListener('blur', function() {
        switch (true) {
            case !$password.value.trim():
                $passwordErrors.innerHTML = 'The password field is required';
                $password.classList.add('is-invalid')
                break;
           /* case !regExPass.test($password.value):
                $passwordErrors.innerHTML = 'La contraseña debe tener: entre 6 o 12 caracteres, al menos una mayúscula, una minúscula y un número';
                $password.classList.add('is-invalid')
                break*/
            default:
                $passwordword.classList.remove('is-invalid');
                $passwordword.classList.add('is-valid');
                $passwordErrors.innerHTML = ''
                break;
        }
    })

    $password2.addEventListener('blur', function(){
        switch (true) {
            case !$password2.value.trim():
                $password2Errors.innerHTML = 'The Confirm Password field is required';
                $password2.classList.add('is-invalid')
                break;
            case $password2.value != $password2.value:
                passw$password2Errors.innerHTML = 'The Confirm Password field you entered does not match';
                $password2.classList.add('is-invalid')
                break;
            default:
                $password2.classList.remove('is-invalid');
                $password2.classList.add('is-valid');
                $password2Errors.innerHTML = ''
                break;
        }
    })




   /* $terms.addEventListener('click',function(){
        $terms.value = 'on'
        $terms.classList.toggle('is-valid');
        $terms.classList.remove('is-invalid');
        $termsErrors.innerHTML = ""
    })

    $form.addEventListener('submit',function(event){
        let error = false;
        event.preventDefault()
        console.log($form.elements)
        let elementosForm = this.elements
        
        for (let index = 0; index < elementosForm.length-1; index++) {
            if(elementosForm[index].value == ""){
                elementosForm[index].classList.add('is-invalid');
                submitErrors.innerHTML = "Los campos señalados son obligatorios";
                error = true;
            }
        }

        if(!$terms.checked){
            $terms.classList.add('is-invalid');
            $termsErrors.innerHTML = "Debes aceptar las bases y condiciones"
            error = true
        }

        if(!error){
            console.log('Todo bien');
            $form.submit()
        }

    })*/

   
})



    
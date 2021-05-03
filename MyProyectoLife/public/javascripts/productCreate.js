/* LLAMO A LOS ID*/ 
const div = document.querySelector("#variantes-producto")
const fragment = document.createDocumentFragment();
const template = document.querySelector("#template-variante").content;
const agregar = document.querySelector("#agregar");
const select1 = document.querySelector("#select-primario");
const select2 = document.querySelector("#select-secundario");
//const contenido = document.querySelector("#contenedor");

/* CAPTURO DATOS INGRESADOS EN LOS INPUTS*/ 
const inputName = document.querySelector('#inputName');
const inputDescription = document.querySelector('#inputDescription');
const inputPrice = document.querySelector('#inputPrice');
const inputDiscount = document.querySelector('#inputDiscount');
//const inputColor = document.querySelector('#inputColor')
const errorName = document.querySelector('#errorName');
const errorDescription = document.querySelector('#errorDescription');
const errorPrice = document.querySelector('#errorPrice');
const errorDiscount = document.querySelector('#errorDiscount');
//const errorColor = document.querySelector("#errorColor")
const inputFile = document.querySelector('#file-input');
const errorFile = document.querySelector('#errorFile');


/* ENCARGADO DE DAR FUNCIONALIDAD AL BOTON AGREGAR*/ 
document.addEventListener("DOMContentLoaded", function(){
  
  select1.addEventListener("change", ()=>{
      console.log(select1.value)
      fetch(`${window.location.origin}/api/product/categoria/${select1.value}`)
      .then(result => {
          if(result.ok){
              return result.json();
          }else{
              return 'err';
          }
      })
      .then(result => {
          console.log(result)
          select2.innerHTML = '<option hidden selected value="0" >choose a subcategory</option>'
          result.subcategoria.forEach(subcategoria => {
              select2.innerHTML += `<option value="${subcategoria.id}" >${subcategoria.subcategory}</option>`
          })
      })
  });
  agregar.addEventListener("click",e => {
      e.preventDefault();
      const clone = template.cloneNode(true);
      fragment.appendChild(clone);

      div.appendChild(fragment);
  })

  /*VALIDACIONES*/ 

  select1.addEventListener('blur', function(){
      if(this.value == 0){
          this.classList.add('is-invalid');
          let error = 'You must select a category';
          errorCategory.innerHTML = error;
      }
      else{
          this.classList.remove('is-invalid');
          this.classList.add('is-valid');
          errorCategory.innerHTML = ''
      }
    
  })
  select2.addEventListener('blur', function(){
    if(this.value == 0){
        this.classList.add('is-invalid');
        let error = 'You must select a subcategory';
        errorSubcategory.innerHTML = error;
    }
    else{
        this.classList.remove('is-invalid');
        this.classList.add('is-valid');
        errorSubcategory.innerHTML = ''
    }
  
    })
   inputName.addEventListener('blur', function(){
       console.log(inputName.value)
        if(this.value == '' || this.value == null) {
            this.classList.add('is-invalid');
            let error = 'the field is required';
            errorName.innerHTML = error;
        }
        else if(this.value != '' && this.value.length <5 ){
            this.classList.add('is-invalid');
            let error = 'The field must have a minimum of 5 characters';
            errorName.innerHTML = error;
        }
        else {
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            errorName.innerHTML = ''
        }
    })
    inputDescription.addEventListener('blur', function(){
        //console.log(inputDescription.value)
        if(this.value == '' || this.value == null) {
            this.classList.add('is-invalid');
            let error = 'the field is required';
            errorDescription.innerHTML = error;
        }
        else if(this.value != '' && this.value.length <20 ){
            this.classList.add('is-invalid');
            let error = 'The field must have a minimum of 20 characters';
            errorDescription.innerHTML = error;
        }
        else {
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            errorDescription.innerHTML = ''
        }
    })
    inputPrice.addEventListener('blur', function(){
        console.log(inputPrice.value)
        if(this.value == '' || this.value == 0) {
            this.classList.add('is-invalid');
            let error = 'You must enter a price';
            errorPrice.innerHTML = error;
        }
        else if(this.value != '' && this.value.length <=2 ){
            this.classList.add('is-invalid');
            let error = 'You must enter a valid price';
            errorPrice.innerHTML = error;
        }
        else {
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            errorPrice.innerHTML = ''
        }
    })
    inputDiscount.addEventListener('blur', function(){
       // console.log(inputPrice.value)
        if(this.value == '' || this.value < 0 ) {
            this.classList.add('is-invalid');
            let error = 'You must enter a discount, in case of not having enter a 0';
            errorDiscount.innerHTML = error;
        }
        else {
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            errorDiscount.innerHTML = ''
        }
    })
    /*inputColor.addEventListener('blur', function(){
        console.log(inputColor.value);
        if(this.value == ''){
            this.classList.add('is-invalid');
            let error = 'Debe ingresar un color en hexadecimal';
            errorColor.innerHTML = error;
        }
        else {
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            errorColor.innerHTML = ''
        }
    })*/

    inputFile.addEventListener('change', function(){
        //console.log(inputFile.files.length);
        //console.log(inputFile.files[0].value);
        //console.log(inputFile.files[1].name);
        for(let i=0; i<inputFile.files.length; i++) {
            //console.log(inputFile)
            if(inputFile.files[i].name != "" && !(/\.(jpg|jpeg|png|gif)$/i).test(inputFile.files[i].name)){
                this.classList.add('is-invalid');
                let error = `file extension(${i +1}) not allowed <br>`;
                errorFile.innerHTML += error; 
            }
            else {
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                errorFile.innerHTML = ''
            }
        }

    })
})
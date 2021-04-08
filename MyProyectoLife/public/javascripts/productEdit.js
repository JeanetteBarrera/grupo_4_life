const select1 = document.querySelector("#select-primario");
const select2 = document.querySelector("#select-secundario");
      
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
                select2.innerHTML = '<option hidden selected value="0" >Elija una subcategoria</option>'
                result.subcategoria.forEach(subcategoria => {
                    select2.innerHTML += `<option value="${subcategoria.id}" >${subcategoria.subcategory}</option>`
                })
            })
        });
    })
    
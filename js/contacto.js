const URLGET = "https://jsonplaceholder.typicode.com/posts"
function viewInput() {
  let arrayInput = new Array ();
  let inputValue = $(".datoInput"), namesValue = [].map.call(inputValue, function(dataInput) {
    arrayInput.push(dataInput.value);
  });
  arrayInput.forEach(function(inputsValueData) {
    console.log("El dato es:" + inputsValueData);
  });
}

let data = $("dataform").click(() =>  {
  $.post(URLGET, inputsValueData, (respuesta, estado) => {
    if(estado === "success") {
        $("#DivEstado").prepend( 
          `<div>
                                      <h4 class="FormText center"> Guardado: ${respuesta.dato[0]}</h3>

                                      </div>`

        );
    }
  }
  
  );
  
});
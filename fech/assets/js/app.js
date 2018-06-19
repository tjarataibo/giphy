const inputText = document.querySelector("input")
// const containerTitle = document.getElementById("title")
// const containerYear = document.getElementById("year")
// const containerRuntime = document.getElementById("runtime")
const containerImage = document.getElementById("img")


//enviar mensaje con enter sin boton
inputText.addEventListener("keypress", (event) => {
    // wich y keyCode son eventos del teclado
    let key = event.which || event.keyCode; //  una tecla o el codigo de esa tecla
    // 13 es enter
    if (key === 13) { // 13 es valido para enter 
        let gif = inputText.value;
        // console.log(movie)
        inputText.value = ""; // limpiar input

        fetch(`http://api.giphy.com/v1/gifs/search${gif}&apikey=dc6zaTOxFJmzC`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                renderInfo(data);
            })
    }
})
const renderInfo = data => {
    // containerTitle.innerHTML = data.Title;
    // containerYear.innerHTML = data.Year;
    // containerRuntime.innerHTML = data.Runtime;
    containerImage.innerHTML = `<img src="${gifImage}">`; // es valido

}
const inputText = document.querySelector("input")
// const containerTitle = document.getElementById("title")
// const containerYear = document.getElementById("year")
// const containerRuntime = document.getElementById("runtime")
const containerImage = document.getElementById("elementos")


//enviar mensaje con enter sin boton
inputText.addEventListener("keypress", (event) => {
    // wich y keyCode son eventos del teclado
    let key = event.which || event.keyCode; //  una tecla o el codigo de esa tecla
    // 13 es enter
    if (key === 13) { // 13 es valido para enter
        let gif = inputText.value;
        // console.log(movie)
        inputText.value = ""; // limpiar input
        containerImage.innerHTML = "";

        fetch(`https://api.giphy.com/v1/gifs/search?api_key=w0pDBtDpXaNmRzDVpcVhUg4iTuTiI9S0&q=${gif}&limit=25&offset=0&rating=G&lang=en`)
            .then(response => response.json())
            .then(dato => {
                console.log(dato);
                renderInfo(dato);
            })
    }
})
const renderInfo = dato => {
    // containerTitle.innerHTML = data.Title;
    // containerYear.innerHTML = data.Year;
    // containerRuntime.innerHTML = data.Runtime;
    dato.data.forEach(element => {
    let gifImage = element.images.downsized.url;
    containerImage.innerHTML += `<img src="${gifImage}">`; // es valido

});
}

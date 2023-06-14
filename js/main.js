let resultsContainer = document.getElementById("results");
let botonTraerInfo = document.getElementById("botonTraerInfo");
let barraBusqueda = document.getElementById("searchBar");

//1. Api call y hago console log de los resultados.

    const getAllCharacters = async () => {

        let res = await axios.get("https://rickandmortyapi.com/api/character");


        //Para saber a que resultados acceder =>
        console.log(res);
        return res.data.results;
    }

    //5. Creo una barra de búsqueda.

    //FUNCIÖN BARRA BÚSQUEDA Y BARRA BÚSQUEDA

    const getCharacterFilter = async () => {

        let res = await axios.get(`https://rickandmortyapi.com/api/character/?name=${searchTerm}`)

        return res.data.results;
    }

    let searchTerm = "";

    barraBusqueda.addEventListener("change", (e) => {
        searchTerm = e.target.value
        console.log(searchTerm);
    })

    //getAllCharacters();

//2. Mapeo esos resultados en la propia consola y saco únicamente un elemento de los que contiene cada objeto.
//3. Hago que la api call dependa de un evento del DOM. En este caso el botón.
//4. Pinto los resultados en el DOM.
    // A. Hago una tarjeta para cada resultado.
    // B. Le añado nombre, localización, status e imagen.
//6. Hago una apicall dependiente del contenido del input de la barra de búsqueda.

    botonTraerInfo.addEventListener('click', () => {
        resultsContainer.replaceChildren()
        getCharacterFilter().then((res) => {
        res.map((char) => {
            console.log(char);
            const tarjetaPersonaje = document.createElement("div");
            const nombrePersonaje = document.createElement("div")
            const localizacionPersonaje = document.createElement("div")
            const estadoPersonaje = document.createElement("div");
            //const imagenPersonaje = document.createElement("div")

            appenAndStyle(resultsContainer, tarjetaPersonaje, "card");
            appenAndStyle(tarjetaPersonaje, nombrePersonaje, "nombre", `Nombre: ${char.name}`)
            appenAndStyle(tarjetaPersonaje, localizacionPersonaje, "nombre", `Localización: ${char.location.name}`);
            appenAndStyle(tarjetaPersonaje, estadoPersonaje, "nombre", `Estado: ${char.status}`)
            // appenAndStyle(tarjetaPersonaje, imagenPersonaje, "imagen", imagenPersonaje.style.backgroundImage = `url(${char.image})`)

            tarjetaPersonaje.style.backgroundImage = `url(${char.image})`
        })
    })
    })


    const appenAndStyle = (father, child, clase, content) => {

        father.appendChild(child);
        child.classList.add(clase);
        if(content){
            child.innerHTML = content;
        }
    };